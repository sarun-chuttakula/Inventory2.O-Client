import React from 'react'
// import Dashboard from './components/dashboard/dashboard'
import DesktopAudit from './pages/desktop/desktop'
// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/desktop' element={<DesktopAudit />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
