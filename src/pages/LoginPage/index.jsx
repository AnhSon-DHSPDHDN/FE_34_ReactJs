import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../../redux/features/auth/authSlice'

const LoginPage = () => {
  const [formState, setFormState] = useState({
    username: '',
    password: ''
  })
  const dispatch = useDispatch()

  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginSuccess(formState))
  }

  const handleChangeFormState = (event) => {
    const { value, name } = event.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name='username'
            onChange={handleChangeFormState}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="text"
            id="password"
            name='password'
            onChange={handleChangeFormState}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginPage
