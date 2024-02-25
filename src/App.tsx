import React from 'react'
// import Dashboard from './components/dashboard/dashboard'
import AcAudit from './pages/ac/ac'
import AirpurifierAudit from './pages/airpurifier/airpurifier'
import BiometrixAudit from './pages/biometrix/biometrix'
import DesktopAudit from './pages/desktop/desktop'
import KeyboardAudit from './pages/keyboard/keyboard'
import LaptopAudit from './pages/laptop/laptop'
import MonitorAudit from './pages/monitor/monitor'
import TabAudit from './pages/tab/tab'
import TvAudit from './pages/tv/tv'
import MouseAudit from './pages/mouse/mouse'
import PrinterAudit from './pages/printer/printer'
import ProjectorAudit from './pages/projector/projector'
import RouterAudit from './pages/router/router'
import UpsAudit from './pages/ups/ups'
// import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'
import { Role } from './enums'
import RequireAuth from './components/RequireAuth'
import Layout from './components/Layout'
import useAuth from './hooks/useAuth'
import LoginScreen from './pages/Login'
import SignupScreen from './pages/Signup'
import Unauthorized from './components/Unauthorized'
import Missing from './components/Missing'

function App() {
  const auth = useAuth()
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* public routes */}
          <Route
            path='/login'
            element={auth ? <Navigate to='/' /> : <LoginScreen />}
          />
          <Route
            path='*'
            element={!auth ? <Navigate to='/login' /> : <Missing />}
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
            <Route path='/' element={<Dashboard />} />
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
          </Route>
        </Route>
        {/* we want to protect these routes */}
      </Routes>
    </div>
  )
}

export default App
