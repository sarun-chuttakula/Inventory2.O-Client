import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link } from 'react-router-dom'

const ProfileDropdown: React.FC = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  // const id = authData?.id

  const handleLogout = () => {
    setIsOpen(false)
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
          <Link
            to={{
              pathname: '/editProfile',
            }}
            // state={{
            //   id: id,
            // }}
            className='dropdown-item profile-link'
            onClick={() => setIsOpen(false)}
          >
            Edit Profile
          </Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </React.Fragment>
  )
}

export default ProfileDropdown
