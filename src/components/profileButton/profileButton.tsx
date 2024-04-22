import React, { useState } from 'react'
import useAuth from '../../hooks/useAuth'
import { Icon } from 'react-icons-kit'
import { person } from 'react-icons-kit/iconic/person'

const ProfileDropdown: React.FC = () => {
  const { logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    console.log('Logging out')
    logout()
  }

  return <div>Hi</div>
}

export default ProfileDropdown
