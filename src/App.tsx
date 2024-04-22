import React from 'react'
// import Dashboard from './components/dashboard/dashboard'
import AcAudit from './pages/ac'
import AirpurifierAudit from './pages/airpurifier'
import BiometrixAudit from './pages/biometrix'
import DesktopAudit from './pages/desktop'
import KeyboardAudit from './pages/keyboard'
import LaptopAudit from './pages/laptop'
import MonitorAudit from './pages/monitor'
import TabAudit from './pages/tab'
import TvAudit from './pages/tv'
import MouseAudit from './pages/mouse'
import PrinterAudit from './pages/printer'
import ProjectorAudit from './pages/projector'
import RouterAudit from './pages/router'
import UpsAudit from './pages/ups'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/ITdashboard'
import { Role } from './enums'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import useAuth from './hooks/useAuth'
import LoginScreen from './pages/Login'
import SignupScreen from './pages/Signup'
import Unauthorized from './components/Unauthorized'
import Missing from './components/Missing'
import MainSidebar from './components/sidebar/sidebar'
import Main from './pages/main'
import PurchaseDashboard from './pages/PurchaseDashboard'
import PurchaseRegister from './pages/purchase-register'
import FetchAssets from './pages/fetchAssets'
import EditAssetPage from './pages/editAsset'
import ProfileDropdown from './components/profileButton/profileButton'
function App() {
  const { authData } = useAuth()
  return (
    <div className={authData ? 'app-container' : 'APP'}>
      {authData && (
        <div className='app-sidebar'>
          <MainSidebar />
        </div>
      )}
      <div className={authData ? 'app-content' : ''}>
        {authData && (
          <div className={authData ? 'app-header' : ''}>
            <div className='profile'>
              <ProfileDropdown />
            </div>
          </div>
        )}
        <div className={authData ? 'content' : ''}>
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* public routes */}
              <Route
                path='/login'
                element={authData ? <Navigate to='/' /> : <LoginScreen />}
              />
              <Route
                path='*'
                element={!authData ? <Navigate to='/login' /> : <Missing />}
              />
              {/* <Route path="/auth0-callback" element={<Auth0Callback />} /> */}
              <Route path='/signup' element={<SignupScreen />} />
              <Route path='/unauthorized' element={<Unauthorized />} />
              <Route
                element={
                  <RequireAuth
                    allowedRoles={[
                      Role.admin,
                      Role.editor,
                      Role.user,
                      Role.superadmin,
                    ]}
                  />
                }
              >
                <Route path='/' element={<Main />} />
                <Route
                  path='/purchase-dashboard'
                  element={<PurchaseDashboard />}
                />
                <Route
                  path='/PurchaseRegister'
                  element={<PurchaseRegister />}
                />
                <Route path='/it-dashboard' element={<Dashboard />} />
                <Route path='/ac' element={<AcAudit />} />
                <Route path='/airpurifier' element={<AirpurifierAudit />} />
                <Route path='/biometrix' element={<BiometrixAudit />} />
                <Route path='/desktop' element={<DesktopAudit />} />
                <Route path='/keyboard' element={<KeyboardAudit />} />
                <Route path='/laptop' element={<LaptopAudit />} />
                <Route path='/monitor' element={<MonitorAudit />} />
                <Route path='/mouse' element={<MouseAudit />} />
                <Route path='/printer' element={<PrinterAudit />} />
                <Route path='/projector' element={<ProjectorAudit />} />
                <Route path='/router' element={<RouterAudit />} />
                <Route path='/tab' element={<TabAudit />} />
                <Route path='/tv' element={<TvAudit />} />
                <Route path='/ups' element={<UpsAudit />} />
                <Route path='fetchassets' element={<FetchAssets />} />
                <Route path='/edit' element={<EditAssetPage />} />
              </Route>
            </Route>
            {/* we want to protect these routes */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
