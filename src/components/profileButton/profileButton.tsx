import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const ProfileDropdown: React.FC = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    console.log('Logging out')
    logout()
  }

  return (
    <React.Fragment>
      {/* Profile Icon */}
      <button className='profile-icon' onClick={() => setIsOpen(!isOpen)}>
        <img
          src={require('../../assets/employee.png')}
          alt='Profile'
          width='40px'
          height='40px'
        />
      </button>

      {isOpen && (
        <div className='dropdown-menu'>
          <button onClick={() => console.log('Edit Profile')}>
            Edit Profile
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </React.Fragment>
  )
}

export default ProfileDropdown
