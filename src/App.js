import "antd/dist/reset.css";
import "./app.scss";
import Input from "antd/es/input/Input";
import {
  CheckOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Pagination } from "antd";

// File nào không dùng mình xoá :D
// Để sử dụng scss thay vì css => mình sẽ cài đặt scss vào app.
// Chạy lệnh npm install node-sass để cài đặt scss.
// Ngoài ra ReactJS có các thư viện UI thông dụng như: Antd, Mui, React Trap, ...
// Ở bàn này mình sẽ sử dụng Antd => thư viện khá thông dụng, chứa luôn kho Icons :D, tha hồ sử dụng
// Cài xong scss => tiếp theo mình sẽ cài đặt thư viện Antd: npm install antd
// Cài đặt xong antd thì chúng ta import css của thư viện vào, như theo hướng dẫn của trang chủ antd.
// Để kiểm tra antd đã hoạt động chưa, chúng ta thử sử dụng 1 UI của antd.
// Mọi người chú ý khi sử dụng thì phải import vào nhé. => Vậy là thành công :D
// Bây giờ chúng ta code layout todolist nhé.
// Ở đây mình sẽ đặt class theo chuẩn BEM. mọi người tìm hiểu thêm về BEM nhé.
// Để cài đặt bộ icons của antd
// Sử dụng lệnh: npm install --save @ant-design/icons
// Task dài nó sẽ xuống dòng, => mình sẽ cố định 1 dòng và hiển thị "..." nếu task quas dài
// Vậy là mình hoàn thành cơ bản UI của phần todolist nhé.

function App() {
  return (
    <div className="App">
      <div className="todo-list-container">
        <div className="todo-list-wrapper">
          <div className="todo-list-header">
            <h2 className="todo-list-header__title">Todo list application</h2>
            <form className="todo-list-header__form">
              <Input size="large" placeholder="Please input task name..." />
              <button className="todo-list-header__btn-add-task">
                <PlusCircleOutlined style={{ fontSize: "30px" }} />
              </button>
            </form>
            <div className="divider"></div>
          </div>

          <div className="todo-list-main">
            <div className="task">
              <p className="task__name">
                Task 1 asd asd asd asd as da sd asd asdas das da sd asd asd as
                das das d asd asdasdasd
              </p>
              <div className="task__groups-btn">
                <button className="task__btn-done">
                  <CheckOutlined />
                </button>
                <button className="task__btn-del">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
            {/* Đường gạch ngang */}
            <div className="divider"></div>

            <div className="task">
              <p className="task__name">
                Task 1 asd asd asd asd as da sd asd asdas das da sd asd asd as
                das das d asd asdasdasd
              </p>
              <div className="task__groups-btn">
                <button className="task__btn-done">
                  <CheckOutlined />
                </button>
                <button className="task__btn-del">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
            {/* Đường gạch ngang */}
            <div className="divider"></div>

            <div className="task">
              <p className="task__name">
                Task 1 asd asd asd asd as da sd asd asdas das da sd asd asd as
                das das d asd asdasdasd
              </p>
              <div className="task__groups-btn">
                <button className="task__btn-done">
                  <CheckOutlined />
                </button>
                <button className="task__btn-del">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
            {/* Đường gạch ngang */}
            <div className="divider"></div>

            <div className="task">
              <p className="task__name task__name--done">Task 1 Done ne</p>
              <div className="task__groups-btn">
                <button className="task__btn-done">
                  <CheckOutlined />
                </button>
                <button className="task__btn-del">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
            {/* Đường gạch ngang */}
            <div className="divider"></div>

            <div className="task">
              <p className="task__name task__name--done">Task 2 done ne</p>
              <div className="task__groups-btn">
                <button className="task__btn-done">
                  <CheckOutlined />
                </button>
                <button className="task__btn-del">
                  <DeleteOutlined />
                </button>
              </div>
            </div>
            {/* Đường gạch ngang */}
            <div className="divider"></div>
          </div>

          <div className="divider"></div>
          <div className="todo-list-pagination">
            <Pagination defaultCurrent={1} total={50} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
