import React from 'react'
// import useAuth from '../../hooks/useAuth'
import { Link, useLocation } from 'react-router-dom'

function MainSidebar() {
  // const { logout } = useAuth()
  const location = useLocation()

  // const handleLogout = () => {
  //   console.log('Logging out')
  //   logout()
  // }

  const path = location.pathname.split('/')[1]

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Link to='/' className='sidebar-brand'>
          XELP
        </Link>
      </div>
      <ul className='sidebar-nav'>
        <li className={path === '' ? 'active' : ''}>
          <Link to='/' className='sidebar-link'>
            HOME
          </Link>
        </li>
        {/* <li className='sidebar-dropdown'>
          <a href='/items' className='sidebar-link'>
            ITEMS
          </a>
          <div className='sidebar-submenu'>
            <Link to='/laptop' className='sidebar-submenu-item'>
              Laptop
            </Link>
            <Link to='/desktop' className='sidebar-submenu-item'>
              Desktop
            </Link>
            <Link to='/monitor' className='sidebar-submenu-item'>
              Monitor
            </Link>
            <Link to='/keyboard' className='sidebar-submenu-item'>
              Keyboard
            </Link>
            <Link to='/mouse' className='sidebar-submenu-item'>
              Mouse
            </Link>
            <Link to='/tab' className='sidebar-submenu-item'>
              Tab/iPad/Mobile
            </Link>
            <Link to='/printer' className='sidebar-submenu-item'>
              Printer
            </Link>
            <Link to='/router' className='sidebar-submenu-item'>
              Router
            </Link>
          </div>
        </li> */}
        <li>
          <Link
            to={{
              pathname: '/fetchassets',
            }}
            state={{ asset_type: path }}
            className='sidebar-link'
          >
            Fetch
          </Link>
        </li>
        <li>
          <Link to='/purchase-dashboard' className='sidebar-link'>
            PO Dashboard
          </Link>
        </li>
        <li>
          <Link to='/it-dashboard' className='sidebar-link'>
            IT Dashboard
          </Link>
        </li>
        <li>
          {/* <button className='sidebar-link' onClick={handleLogout}>
            Logout
          </button> */}
        </li>
      </ul>
    </div>
  )
}

export default MainSidebar
