import "antd/dist/reset.css";
import "./app.scss";
import { Pagination } from "antd";
import Divider from "./components/Divider";
import Task from "./components/Task";
import FormInputTask from "./components/FormInputTask";

// Phần code task lặp lại nên ta có thể tách ra component
// Phần form mình cũng có thể tách component cho gọn
// Phần hiển thị Task đang bị lặp, chúng ta có thể sử dụng array.map để hiển thị danh sách
// Mọi người có thể tìm hiểu với từ khoá. Render list in react
// Để hiển thị Task theo dạng list mình phải có 1 listTask để map hiển thị.

// 1 Task sẽ là 1 object có các thuộc tính:
// id - id sẽ là unique (không trùng nhau)
// taskName
// isDone - Trạng thái của task (đã hoàn thành hay chưa)

// Mình có thể viết 1 function render phần task này => sẽ return về 1 list JSX là component Task

const listTask = [
  {
    id: 1,
    taskName: "Task 1",
    isDone: false,
  },
  {
    id: 2,
    taskName: "Task 2",
    isDone: false,
  },
  {
    id: 3,
    taskName: "Task 3",
    isDone: false,
  },
  {
    id: 4,
    taskName: "Task 4",
    isDone: false,
  },
  {
    id: 5,
    taskName: "Task 5",
    isDone: false,
  },
];

function App() {
  /*
   * @Params: listTask là danh sách task
   * @Return: list Component Task để hiển thị ra màn hình
   */

  // Trường hợp render list thì React cần mình cung cấp key cho mỗi item để tối ưu phần render
  // Phần này mình sẽ viết gọn lại với cú pháp của arrow function
  // Mọi người chưa quen thì có thể viết rõ như ban đầu
  // Code đã gọn hơn rất nhiều. để hiển thị tên của task, xử lí các button add task, xoá task, done task thì mình sẽ tiếp tục ở các bài Props, state
  const renderTaskList = (tasks) => {
    return tasks.map((task) => <Task key={task.id} />);
  };

  return (
    <div className="App">
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <FormInputTask />

          <div className="todo-list-main">
            {/* Gọi hàm render Task và truyền list task để hiển thị */}
            {renderTaskList(listTask)}
          </div>

          <Divider />
          <div className="todo-list-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
