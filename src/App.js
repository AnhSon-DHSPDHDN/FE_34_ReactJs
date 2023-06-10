import "antd/dist/reset.css";
import "./app.scss";
import { Pagination } from "antd";
import Divider from "./components/Divider";
import Task from "./components/Task";
import FormInputTask from "./components/FormInputTask";
import { useEffect, useState } from "react";

// Để sử dụng localStrorage mình cần phải có key
// Mình sẽ khai báo 1 key để lưu trữ task
// Mọi người có thể tạo 1 file constant.js ở 1 thư mục constant riêng
// đối với bài tập này mình sẽ khai báo tạm ở đây nhé.

const KEY_TASK_LIST = "tasks";

function App() {
  // Mình muốn lấy dữ liệu từ local storage thì mình sẽ xử lí ở initialState của useState
  // Dữ liệu ở local storage là 1 string nên khi lấy ra cần phải parse JSON
  // Trong trường hợp không có dữ liệu sẽ trả về underfine nên mình thêm || [] để khi gặp underfined sẽ lấy 1 array rỗng làm init state
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem(KEY_TASK_LIST)) || []
  );
  // Đối với chức năng phân trang thì mình có thể tạo ra 1 state mới để thực hiện nhé.
  // Mình sẽ khai báo initState dưới dạng obj
  const [pagination, setPagination] = useState({
    currentPage: 1,
    dataPerPage: [],
    limitPerPage: 5,
  });

  const renderTaskList = (tasks) => {
    return tasks.map((task) => (
      <Task
        key={task.id}
        task={task}
        handleRemoveTask={handleRemoveTask}
        handleMakeDoneTask={handleMakeDoneTask}
      />
    ));
  };

  // Chúng ta tiếp tục xây dựng chức năng xoá task nhé.
  // Xoá task thì phải biết id của task => Nhận biết được đang xoá task nào
  // Nên function của mình phải truyền vào id nhé
  // Button Remove ở component task nên mình sẽ props xuống component Task
  // Vậy là thành công lấy id task nhé. bây giờ mình sẽ xử lý delete task
  const handleRemoveTask = (taskId) => {
    // Mình clone state tasks ra để tránh việc reference type
    // Để xoá 1 item trong 1 array. mình có thể sử dụng splice của js hoặc filter
    // Mình sẽ sử dụng filter cho tiện. đối với filter thì mình không cần clone ra biến mới
    // Bản thân filter thì nó đã return về cho mình 1 array mới nên k cần clone

    // Hàm filter sẽ lọc lại danh sách task ban đầu có id !== taskID mình muốn xoá
    const _tasksList = tasks.filter((task) => task.id !== taskId);

    // Bây giờ mình chỉ cần set lại state Tasks là OK!
    setTasks(_tasksList);
    // OK
    // Tương tự mình sẽ xử lí cho done và delete
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify(_tasksList));
  };

  // Tiếp theo là chức năng done task
  // Done task thì mình cũng cần phải biết ID task cần done => tương tự chức năng remove
  // M.n Ban đầu code chưa quen thì nên đặt log như mình để kiểm tra function đã chạy hay chưa
  // Props function này xuống Task
  const handleMakeDoneTask = (taskId) => {
    // Bây giờ bài toán trở thành sửa 1 phần tử của 1 array
    // Đầu tiên mình sẽ tìm index của task cần sửa dựa theo ID
    // Mình sẽ sử dụng hàm findIndex của js
    const existedTaskById = tasks.findIndex((task) => task.id === taskId);

    // Clone state task để tránh việc thay đổi trực tiếp state
    // Trong react mình chỉ có thể thay đổi state thông qua hàm setState(). KHÔNG THỂ THAY ĐỔI TRỰC TIẾP
    // CHính vì thế nên mình mới cần clone ra sau đó set lại state
    const _tasksList = [...tasks];

    // Mình sửa lại giá trị của tasks tại vị trí cần sửa
    //  bằng với giá trị của chính nó. sau đó ghi đè lại key isDone = true
    _tasksList[existedTaskById] = {
      ..._tasksList[existedTaskById],
      isDone: true,
    };

    // Bây giờ chỉ cần set lại state tasks là OK
    setTasks(_tasksList);
    // OK
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify(_tasksList));
  };

  // Hiện tại khi mình reload trang thì state sẽ bị reset
  // Để giữ được giá trị của state sau khi reload
  // mình sẽ sử dụng localStorage nhé.

  const handleAddTask = (taskName) => {
    const _task = {
      id: new Date().getTime(),
      taskName: taskName,
      isDone: false,
    };
    setTasks([_task, ...tasks]);
    // Khi add task thành công thì mình update vào localstorage
    // Mình quay lại kiểm tra ở browser nhé
    localStorage.setItem(KEY_TASK_LIST, JSON.stringify([_task, ...tasks]));
    // OK
  };

  // Mình sẽ tạo 1 hàm để change page làm props cho component Pagination
  // Page đã work đúng, bây giờ chúng ta phải tính toán để hiển thị số task trên 1 trang
  // Tiếp theo sẽ xử lí phần chuyển trang
  const handleChangePage = (page) => {
    // set lại current page khi nhấn chuyển trang
    setPagination({
      ...pagination,
      currentPage: page,
    });
  };

  // useEffect là 1 hook trong reactjs
  // Đối với trường hợp này. khi tasks thay đổi giá trị thì useEffect của mình sẽ chạy lại
  // Mình sẽ sử dụng để tính toán lại dataPerpage khi tasks thay đổi
  useEffect(() => {
    // Task.length mà === 0 mình dừng không tính nữa. Chỗ này phải set lại task perpage
    if (!tasks.length) {
      setPagination({
        ...pagination,
        dataPerPage: [],
      });
      return;
    }

    const _tasksList = [...tasks];
    // Mình sẽ sử dụng array.slice để cắt dữ liệu task thành các phần hiển thị trên 1 trang
    // slice nhận vào tham số là điểm bắt đầu cắt và điểm dừng cắt
    // Mình sẽ cho điểm startIndex = (currentPage - 1) * số task hiển thị trên page
    const startIndex = (pagination.currentPage - 1) * pagination.limitPerPage;
    const endIndex = pagination.currentPage * pagination.limitPerPage;
    const tasksPerPage = _tasksList.slice(startIndex, endIndex);

    // Ta thực hiện setData perpage vào state pagination
    setPagination({
      ...pagination,
      dataPerPage: [...tasksPerPage],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tasks, pagination.currentPage]); // Phần nằm trong dấu [] là depenencies  => nếu những giá trị bên trong [] thay đổi thì những gì viết trong useEffect sẽ được chạy lại
  // Nó báo warning vì mình k truyền đủ depenencies, tuy nhiên mình chỉ cần lắng nghe tasks thay đổi. nên mình disable eslint để nó k warning
  // Mình sẽ thêm depennenci ở useEffect để nó chạy lại khi page thay đổi => tính toán lại data perpage

  return (
    <div className="App">
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <FormInputTask handleAddTask={handleAddTask} />

          <div className="todo-list-main">
            {!tasks.length && <div>Please input your task</div>}

            {/* Gọi hàm render Task và truyền list task để hiển thị */}
            {/* Lúc này những task render sẽ là task mình đã tính toán ở state pagnination */}
            {renderTaskList(pagination.dataPerPage)}
          </div>

          <Divider />
          <div className="todo-list-pagination">
            {/* Total sẽ là tổng số task */}
            {/* defaultCurrent là page mặc định */}
            {/* Page size là số task / trang */}
            <Pagination
              defaultCurrent={pagination.currentPage}
              current={pagination.currentPage}
              onChange={(page) => handleChangePage(page)}
              total={tasks.length || 0}
              pageSize={pagination.limitPerPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
