import { PlusCircleOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'
import Divider from '../Divider'
import './style.scss'

const FormInputTask = () => {
  return (
    <div className="todo-list-header">
      <h2 className="todo-list-header__title">Todo list application</h2>
      <form className="todo-list-header__form">
        <Input size="large" placeholder="Please input task name..." />
        <button className="todo-list-header__btn-add-task">
          <PlusCircleOutlined style={{ fontSize: "30px" }} />
        </button>
      </form>
      <Divider />
    </div>
  )
}

export default FormInputTask
