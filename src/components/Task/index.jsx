import React from "react"
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons"
import Divider from "../Divider"
import './style.scss'

// Chỗ này lỗi vì jsx bắt buộc phải có thẻ wrapper lại nội dung => sử dụng <></> hoặc React.Fragment
// <></> hoặc React.Fragment đều giống nhau.

const Task = () => {
  return <React.Fragment>
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
    <Divider />
  </React.Fragment>
}

export default Task
