import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function MainSidebar() {
  const location = useLocation()
  const path = location.pathname.split('/')[1]
  const [showPODashboardOptions, setShowPODashboardOptions] = useState(false)
  const [showITDashboardOptions, setShowITDashboardOptions] = useState(false)

  const togglePODashboardOptions = () => {
    setShowPODashboardOptions(!showPODashboardOptions)
    setShowITDashboardOptions(false)
  }

  const toggleITDashboardOptions = () => {
    setShowITDashboardOptions(!showITDashboardOptions)
    setShowPODashboardOptions(false)
  }

  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Link to='/' className='sidebar-brand'>
          XELP
        </Link>
      </div>

      <Link to='/' className={`sidebar-link ${path === '' ? 'active' : ''}`}>
        HOME
      </Link>

      <Link
        to={{
          pathname: '/it-dashboard/fetchassets',
        }}
        state={{ asset_type: path }}
        className='sidebar-link'
      >
        Fetch
      </Link>

      <div
        className={`sidebar-link ${showPODashboardOptions ? 'active' : ''}`}
        onClick={togglePODashboardOptions}
      >
        PO Dashboard
      </div>
      {showPODashboardOptions && (
        <div className='sub-options'>
          <Link
            to='/purchase-dashboard/purchaseregister'
            className='sub-option-link'
          >
            Purchase Register
          </Link>
        </div>
      )}

      <div
        className={`sidebar-link ${showITDashboardOptions ? 'active' : ''}`}
        onClick={toggleITDashboardOptions}
      >
        IT Dashboard
      </div>
      {showITDashboardOptions && (
        <div className='sub-options'>
          <Link to='/it-dashboard/issues' className='sub-option-link'>
            Issues
          </Link>
          <Link to='/it-dashboard/tasks' className='sub-option-link'>
            Tasks
          </Link>
        </div>
      )}
    </div>
  )
}

export default MainSidebar
