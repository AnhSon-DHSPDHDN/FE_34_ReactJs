import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/routes'
import { useSelector } from 'react-redux'
import './style.css'

const HeaderComponent = () => {
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)

  console.log(auth, 'auth state store');

  const handleLogout = () => {
    navigate(APP_ROUTES.LOGIN_PAGE)
  }

  return (
    <div className='header-container'>
      <ul className='navigation-bar'>
        <li className='navigation-bar__list'>
          <Link to={APP_ROUTES.HOME_PAGE}>Home page</Link>
        </li>
        <li className='navigation-bar__list'>
          <Link to={APP_ROUTES.ABOUT_PAGE}>About page</Link>
        </li>
        <li className='navigation-bar__list'>
          <Link to={APP_ROUTES.TOPIC_PAGE}>Topic page</Link>
        </li>
      </ul>

      {auth.isAuth && <div>Xin chao: {auth.profileUser.username}</div>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HeaderComponent
