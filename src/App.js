import "antd/dist/reset.css";
import "./app.scss";
import { Pagination, Spin } from "antd";
import Divider from "./components/Divider";
import Task from "./components/Task";
import FormInputTask from "./components/FormInputTask";
import { useEffect, useState } from "react";
import { TasksApi } from "./apis/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    limitPerPage: 5,
    totalTask: 0,
  });

  const fetchAllTasks = async (params) => {
    setIsLoading(true);
    const response = await TasksApi.getAllTasks(params);
    setTasks(response.data);
    setPagination({
      ...pagination,
      totalTask: response.headers["x-total-count"],
    });
    setIsLoading(false);
  };

  useEffect(() => {
    fetchAllTasks({
      _page: pagination.currentPage,
      _limit: pagination.limitPerPage,
    });
  }, [pagination.currentPage]);

  const renderTaskList = (tasks) => {
    if (!tasks.length) {
      return <div>Please input your task</div>;
    }

    return tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        handleRemoveTask={handleRemoveTask}
        handleMakeDoneTask={handleMakeDoneTask}
      />
    ));
  };

  const handleRemoveTask = async (taskId) => {
    // Sử dụng API để xoá task nhé
    await TasksApi.removeTaskById(taskId);
    fetchAllTasks({
      _page: pagination.currentPage,
      _limit: pagination.limitPerPage,
    });
    // Sau khi xoá thì gọi lại api để cập nhật. truyền thêm param phân trang
  };

  const handleMakeDoneTask = async (taskId) => {
    // Handle API
    // Trường hợp này mình có thể sử dụng method PUT hoặc PATCH đều được, PUT thì phải gửi lên toàn bộ dữ liệu của task. còn PATCH thì chỉ cần gửi những dữ liệu cần update
    // Ở đây mình sẽ sử dụng patch
    // Nhầm idDone => isDone
    const payload = {
      isDone: true,
    };

    await TasksApi.makeDoneTaskById(taskId, payload);
    fetchAllTasks({
      _page: pagination.currentPage,
      _limit: pagination.limitPerPage,
    });
  };

  const handleAddTask = async (taskName) => {
    const _task = {
      taskName: taskName,
      isDone: false,
      createAt: new Date().getTime(),
    };

    await TasksApi.createTask(_task);
    fetchAllTasks({
      _page: pagination.currentPage,
      _limit: pagination.limitPerPage,
    });
  };

  const handleChangePage = (page) => {
    setPagination({
      ...pagination,
      currentPage: page,
    });
  };

  return (
    <div className="App">
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <FormInputTask handleAddTask={handleAddTask} />

          <div className="todo-list-main">
            {isLoading ? <Spin /> : renderTaskList(tasks)}
          </div>

          <Divider />
          <div className="todo-list-pagination">
            <Pagination
              defaultCurrent={pagination.currentPage}
              current={pagination.currentPage}
              onChange={(page) => handleChangePage(page)}
              total={pagination.totalTask}
              pageSize={pagination.limitPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
