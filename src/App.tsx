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
import EditProfile from './pages/editProfile'
import Medicine from './pages/medicine'
import Pantry from './pages/pantry'
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
                  path='/purchase-dashboard/PurchaseRegister'
                  element={<PurchaseRegister />}
                />
                <Route path='/it-dashboard' element={<Dashboard />} />
                <Route path='/it-dashboard/ac' element={<AcAudit />} />
                <Route
                  path='/it-dashboard/airpurifier'
                  element={<AirpurifierAudit />}
                />
                <Route
                  path='/it-dashboard/biometrix'
                  element={<BiometrixAudit />}
                />
                <Route
                  path='/it-dashboard/desktop'
                  element={<DesktopAudit />}
                />
                <Route
                  path='/it-dashboard/keyboard'
                  element={<KeyboardAudit />}
                />
                <Route path='/it-dashboard/laptop' element={<LaptopAudit />} />
                <Route
                  path='/it-dashboard/monitor'
                  element={<MonitorAudit />}
                />
                <Route path='/it-dashboard/mouse' element={<MouseAudit />} />
                <Route
                  path='/it-dashboard/printer'
                  element={<PrinterAudit />}
                />
                <Route
                  path='/it-dashboard/projector'
                  element={<ProjectorAudit />}
                />
                <Route path='/it-dashboard/router' element={<RouterAudit />} />
                <Route path='/it-dashboard/tab' element={<TabAudit />} />
                <Route path='/it-dashboard/tv' element={<TvAudit />} />
                <Route path='/it-dashboard/ups' element={<UpsAudit />} />
                <Route
                  path='/it-dashboard/fetchassets'
                  element={<FetchAssets />}
                />
                <Route path='/it-dashboard/edit' element={<EditAssetPage />} />
                <Route path='/editProfile' element={<EditProfile />} />
              </Route>
              <Route path='/it-dashboard/medicine' element={<Medicine />} />
            </Route>
            <Route path='/it-dashboard/pantry' element={<Pantry />} />
            {/* we want to protect these routes */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
