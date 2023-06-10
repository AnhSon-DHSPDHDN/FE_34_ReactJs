import { PlusCircleOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { useState } from 'react'
import Divider from '../Divider'
import './style.scss'

const FormInputTask = (props) => {
  const [inputTaskName, setInputTaskName] = useState("")
  // Destructuring
  const { handleAddTask } = props

  const handleChangeTaskName = (event) => {
    setInputTaskName(event.target.value)
  }

  const handleSubmitForm = (event) => {
    event.preventDefault()
    // Chỗ này mình kiểm tra nếu không có taskName thì k cho add task
    if (!inputTaskName) return

    handleAddTask(inputTaskName)
    setInputTaskName("")
  }

  return (
    <div className="todo-list-header">
      <h2 className="todo-list-header__title">Todo list application</h2>
      <form className="todo-list-header__form" onSubmit={handleSubmitForm}>
        <Input
          size="large"
          placeholder="Please input task name..."
          value={inputTaskName}
          onChange={handleChangeTaskName}
        />
        <button className="todo-list-header__btn-add-task" type='submit'>
          <PlusCircleOutlined style={{ fontSize: "30px" }} />
        </button>
      </form>
      <Divider />
    </div>
  )
}

export default FormInputTask
