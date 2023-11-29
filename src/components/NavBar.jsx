import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

const NavBar = () => {
  return (
    <>
      <nav className="navbar topbar navbar-expand  topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
          <i className="fa fa-bars"></i>
        </button>

        <div className="pages">
          <NavLink className='navlinks' to={'/'}>Dashboard</NavLink>
          <NavLink className='navlinks' to={'/home'}>Home</NavLink>
          <NavLink className='navlinks' to={'/books'}>Books</NavLink>
          <NavLink className='navlinks' to={'/orders'}>Orders</NavLink>
          <NavLink className='navlinks' to={'/cart'}>Cart</NavLink>
        </div>

        <ul className="navbar-nav ml-auto">
          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <button className="nav-link dropdown-toggle"  id="userDropdown" 
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className="mr-2 d-none d-lg-inline text-gray-600 pname small">DHINESH T</span>
              <img className="img-profile rounded-circle" alt='profile'
                src={"https://media.licdn.com/dms/image/D5603AQGj5UuZQ9p3eQ/profile-displayphoto-shrink_400_400/0/1693722972398?e=1706745600&v=beta&t=P8A3LCHNBD378ZrQsfPjXYyH7X61cvGZkni3iGKPptQ"} />
            </button>
          </li>
        </ul>
      </nav>


    </>
  )
}

export default NavBar