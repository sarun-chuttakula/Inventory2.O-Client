import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MainSidebar() {
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  const [showPODashboardOptions, setShowPODashboardOptions] = useState(false)
  const [showITDashboardOptions, setShowITDashboardOptions] = useState(false)

  const togglePODashboardOptions = () => {
    setShowPODashboardOptions(!showPODashboardOptions)
    setShowITDashboardOptions(false) // Close IT Dashboard options if open
  }

  const toggleITDashboardOptions = () => {
    setShowITDashboardOptions(!showITDashboardOptions)
    setShowPODashboardOptions(false) // Close PO Dashboard options if open
  }

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
          <li onClick={togglePODashboardOptions} className='sidebar-link'>
            PO Dashboard
          </li>
          {/* Sub-options for PO Dashboard */}
          {showPODashboardOptions && (
            <ul className='sub-options'>
              <li>
                <Link
                  to='/purchase-dashboard/orders'
                  className='sub-option-link'
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  to='/purchase-dashboard/invoices'
                  className='sub-option-link'
                >
                  Invoices
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <li onClick={toggleITDashboardOptions} className='sidebar-link'>
            IT Dashboard
          </li>
          {showITDashboardOptions && (
            <ul className='sub-options'>
              <li>
                <Link to='/it-dashboard/issues' className='sub-option-link'>
                  Issues
                </Link>
              </li>
              <li>
                <Link to='/it-dashboard/tasks' className='sub-option-link'>
                  Tasks
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  )
}

export default MainSidebar
