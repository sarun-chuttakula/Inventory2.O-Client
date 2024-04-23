import React, { useEffect, useState } from 'react'
import { getUserById, updateUser } from '../api/user.api'
import useAuth from '../hooks/useAuth'

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
        setUserData({
          ...response.data,
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
        {/* Render key-value pairs as rows in a table-like layout */}
        <table>
          <tbody>
            {Object.entries(userData).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input
                    type='text'
                    name={key}
                    value={value || ''} // Use empty string if value is null or undefined
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default EditProfile
