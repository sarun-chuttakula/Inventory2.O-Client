import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'

// Import your audit components
import AcAudit from '../../pages/ac'
import AirpurifierAudit from '../../pages/airpurifier'
import BiometrixAudit from '../../pages/biometrix'
import DesktopAudit from '../../pages/desktop'
import KeyboardAudit from '../../pages/keyboard'
import LaptopAudit from '../../pages/laptop'
import MonitorAudit from '../../pages/monitor'
import TabAudit from '../../pages/tab'
import TvAudit from '../../pages/tv'
import MouseAudit from '../../pages/mouse'
import PrinterAudit from '../../pages/printer'
import ProjectorAudit from '../../pages/projector'
import RouterAudit from '../../pages/router'
import UpsAudit from '../../pages/ups'
import Medicine from '../../pages/medicine'
import Pantry from '../../pages/pantry'

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

  // Define your IT dashboard routes and corresponding component mappings
  const itDashboardRoutes = [
    { path: '/ac', component: <AcAudit /> },
    { path: '/airpurifier', component: <AirpurifierAudit /> },
    { path: '/biometrix', component: <BiometrixAudit /> },
    { path: '/desktop', component: <DesktopAudit /> },
    { path: '/keyboard', component: <KeyboardAudit /> },
    { path: '/laptop', component: <LaptopAudit /> },
    { path: '/monitor', component: <MonitorAudit /> },
    { path: '/mouse', component: <MouseAudit /> },
    { path: '/printer', component: <PrinterAudit /> },
    { path: '/projector', component: <ProjectorAudit /> },
    { path: '/router', component: <RouterAudit /> },
    { path: '/tab', component: <TabAudit /> },
    { path: '/tv', component: <TvAudit /> },
    { path: '/ups', component: <UpsAudit /> },
    { path: '/medicine', component: <Medicine /> },
    { path: '/pantry', component: <Pantry /> },
  ]

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

      {/* PO Dashboard */}
      <div
        className={`sidebar-link ${showPODashboardOptions ? 'active' : ''}`}
        onClick={togglePODashboardOptions}
      >
        PO Dashboard
        {showPODashboardOptions ? (
          <MdArrowDropUp className='arrow-icon' />
        ) : (
          <MdArrowDropDown className='arrow-icon' />
        )}
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

      {/* IT Dashboard */}
      <div
        className={`sidebar-link ${showITDashboardOptions ? 'active' : ''}`}
        onClick={toggleITDashboardOptions}
      >
        IT Dashboard
        {showITDashboardOptions ? (
          <MdArrowDropUp className='arrow-icon' />
        ) : (
          <MdArrowDropDown className='arrow-icon' />
        )}
      </div>
      {showITDashboardOptions && (
        <div className='sub-options'>
          {itDashboardRoutes.map((route, index) => (
            <Link
              key={index}
              to={`/it-dashboard${route.path}`}
              className='sub-option-link'
            >
              {route.path.charAt(1).toUpperCase() +
                route.path.slice(2).toLowerCase()}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export default MainSidebar
