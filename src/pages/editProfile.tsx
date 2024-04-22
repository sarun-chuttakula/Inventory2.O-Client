import React, { useEffect, useState } from 'react'
import { getUserById, updateUser } from '../api/user.api'
import useAuth from '../hooks/useAuth'

const EditProfile: React.FC = () => {
  const { authData } = useAuth()
  const [userData, setUserData] = useState({
    firstname: authData?.firstname || '',
    email: authData?.email || '',
  })
  const id = authData?.id || ''
  const token = authData?.accesstoken || ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById(token, id)
        // Set user data fetched from API
        setUserData({
          firstname: response.data.firstname,
          email: response.data.email,
        })
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchData()
  }, [token, id])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await updateUser(token, id, userData)
      // Optionally, you can update the authData as well if needed
    } catch (error) {
      console.error('Error updating user data:', error)
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  return (
    <div className='edit-profile'>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='First Name'
          name='firstname'
          value={userData.firstname}
          onChange={handleInputChange}
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          value={userData.email}
          onChange={handleInputChange}
        />
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default EditProfile
