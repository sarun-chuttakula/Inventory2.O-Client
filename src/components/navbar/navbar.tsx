import React from 'react'
import '../../styles/navbar.css'
import useAuth from '../../hooks/useAuth'
import { Link, useLocation } from 'react-router-dom'

function MainNavbar() {
  const { logout } = useAuth()
  const location = useLocation()

  const handleLogout = () => {
    console.log('Logging out')
    logout()
  }
  const path = location.pathname.split('/')[1]

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <Link to='/' className='navbar-brand'>
          XELP
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                HOME
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='/items'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
              >
                ITEMS
              </a>
              <div
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <a className='dropdown-item' href='/laptop'>
                  Laptop
                </a>
                <a className='dropdown-item' href='/desktop'>
                  Desktop
                </a>
                <a className='dropdown-item' href='/monitor'>
                  Monitor
                </a>
                <a className='dropdown-item' href='/keyboard'>
                  Keyboard
                </a>
                <a className='dropdown-item' href='/mouse'>
                  Mouse
                </a>
                <a className='dropdown-item' href='/tab'>
                  Tab/iPad/Mobile
                </a>
                <a className='dropdown-item' href='/printer'>
                  Printer
                </a>
                <a className='dropdown-item' href='/router'>
                  Router
                </a>
              </div>
            </li>
            <li className='nav-item'>
              <Link
                to={{
                  pathname: '/fetchassets',
                }}
                state={{ asset_type: path }}
                className='nav-link'
              >
                Fetch
              </Link>
            </li>
            <li className='nav-item'>
              <button className='nav-link' onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar
