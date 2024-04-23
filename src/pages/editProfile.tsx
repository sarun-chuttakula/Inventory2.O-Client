import React, { useEffect, useState } from 'react'
import { getUserById, updateUser } from '../api/user.api'
import useAuth from '../hooks/useAuth'
// import './EditProfile.css'; // Import CSS file for component styling

const EditProfile: React.FC = () => {
  const { authData } = useAuth()
  const [userData, setUserData] = useState<{ [key: string]: string }>({})
  const id = authData?.id || ''
  const token = authData?.accesstoken || ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById(token, id)
        console.log(response)
        setUserData(response.data) // Set all data from response
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

  const excludedKeys = [
    'id',
    'created_at',
    'updated_at',
    'created_by',
    'updated_by',
    'is_active',
  ]

  return (
    <div className='edit-profile'>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit} className='profile-form'>
        {/* Render input fields for all key-value pairs except excluded keys */}
        <table className='input-table'>
          <tbody>
            {Object.entries(userData).map(([key, value]) => {
              // Check if key is not in excludedKeys
              if (!excludedKeys.includes(key)) {
                return (
                  <tr key={key}>
                    <td>
                      <label htmlFor={key}>{key}: </label>
                    </td>
                    <td>
                      <input
                        type='text'
                        name={key}
                        value={value || ''}
                        placeholder={key}
                        onChange={handleInputChange}
                        className='input-field'
                      />
                    </td>
                  </tr>
                )
              }
              return null // Skip rendering for excluded keys
            })}
          </tbody>
        </table>
        <button type='submit' className='submit-button'>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditProfile
