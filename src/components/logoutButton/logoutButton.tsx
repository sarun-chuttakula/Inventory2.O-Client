import React from 'react'
import useAuth from '../../hooks/useAuth'

const LogoutButton: React.FC = () => {
  const { logout } = useAuth()
  const handleLogout = () => {
    console.log('Logging out')
    logout() // Call the logout function when button is clicked
  }

  return (
    <button onClick={handleLogout} className='logout-button'>
      Logout
    </button>
  )
}

export default LogoutButton
