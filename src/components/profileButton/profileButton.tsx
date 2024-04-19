import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'

const ProfileDropdown: React.FC = () => {
  const { logout } = useAuth() // Use the useAuth hook to get logout function
  const [isOpen, setIsOpen] = useState(false) // State to manage dropdown visibility

  const handleLogout = () => {
    console.log('Logging out')
    logout()
  }

  return (
    <div className='profile-dropdown'>
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
