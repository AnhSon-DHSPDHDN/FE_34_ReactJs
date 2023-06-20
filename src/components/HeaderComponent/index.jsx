import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../constants/routes'

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate(APP_ROUTES.LOGIN_PAGE)
  }

  return (
    <div>
      <ul>
        <li>
          {/* css => giống thẻ a */}
          <Link to={APP_ROUTES.HOME_PAGE}>Home page</Link>
        </li>
        <li>
          <Link to={APP_ROUTES.ABOUT_PAGE}>About page</Link>
        </li>
        <li>
          <Link to={APP_ROUTES.TOPIC_PAGE}>Topic page</Link>
        </li>
      </ul>

      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default HeaderComponent
