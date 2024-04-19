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
    <div className='profile'>
      {/* Profile Icon */}
      <button className='profile-icon' onClick={() => setIsOpen(!isOpen)}>
        <img src='path_to_profile_image' alt='Profile' />
      </button>

      {isOpen && (
        <div className='dropdown-menu'>
          <button onClick={() => console.log('Edit Profile')}>
            Edit Profile
          </button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  )
}

export default ProfileDropdown
