import React from "react"
import { CheckOutlined, DeleteOutlined } from "@ant-design/icons"
import Divider from "../Divider"
import './style.scss'

// Chỗ này lỗi vì jsx bắt buộc phải có thẻ wrapper lại nội dung => sử dụng <></> hoặc React.Fragment
// <></> hoặc React.Fragment đều giống nhau.

const Task = (props) => {
  // Destructuring: https://dmitripavlutin.com/javascript-object-destructuring/
  // Bước này mình cũng sẽ destructuring function remove task
  const { taskName, isDone, id } = props.task
  // handleRemoveTask thuộc props nên mình phải destructuring ở props nhé
  // Tiếp tục lấy function Done task từ props
  const { handleRemoveTask, handleMakeDoneTask } = props

  // Ở đây thì mình sẽ lấy taskId ở props.task
  // Ra thử phát nhé


  return <React.Fragment>
    <div className="task">
      {/* Template string js */}
      <p className={`task__name ${isDone ? "task__name--done" : ""}`}>
        {taskName}
      </p>
      <div className="task__groups-btn">
        <button
          className="task__btn-done"
          // Tương tự chức năng remove
          onClick={() => handleMakeDoneTask(id)}
        >
          <CheckOutlined />
        </button>
        <button
          className="task__btn-del"
          // Chỗ này để tránh khai báo function mới mình có thể viết gọn 1 callback như thế này
          onClick={() => handleRemoveTask(id)}
        >
          <DeleteOutlined />
        </button>
      </div>
    </div>
    <Divider />
  </React.Fragment>
}

export default Task
