import React, { useEffect, useState } from 'react'
import { getUserById, updateUser } from '../api/user.api'
import useAuth from '../hooks/useAuth'
import { useNotification } from '../components/popupnotification/PopUpNotification'

const EditProfile: React.FC = () => {
  const { notifySuccess, notifyError } = useNotification()
  const { authData } = useAuth()
  const [userData, setUserData] = useState<{ [key: string]: string }>({})
  const [profilePic, setProfilePic] = useState<File | null>(null)
  const [profilePicUrl, setProfilePicUrl] = useState<string | null>(null)
  const id = authData?.id || ''
  const token = authData?.accesstoken || ''

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getUserById(token, id)
        console.log(response)
        setUserData(response.data) // Set all data from response
        setProfilePicUrl(response.data.profilePic) // Assuming the profilePic URL is returned in the response
      } catch (error) {
        console.error('Error fetching user data:', error)
      }
    }
    fetchData()
  }, [token, id])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      const formData = new FormData()
      formData.append('userData', JSON.stringify(userData))
      if (profilePic) {
        formData.append('profilePic', profilePic)
      }

      await updateUser(token, id, formData)
      notifySuccess('Your profile has been updated successfully!')
    } catch (error) {
      console.error('Error updating user data:', error)
      notifyError('Failed to update your profile. Please try again later.')
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setProfilePic(event.target.files[0])
      setProfilePicUrl(URL.createObjectURL(event.target.files[0]))
    }
  }

  const handleDeleteProfilePic = () => {
    setProfilePic(null)
    setProfilePicUrl(null)
  }

  const excludedKeys = [
    'id',
    'created_at',
    'updated_at',
    'created_by',
    'updated_by',
    'is_active',
    'profilePic',
    'lastlogin',
    'password',
    'isauthenticated',
    'role',
  ]

  return (
    <div className='edit-profile'>
      <h2>Edit Profile</h2>
      <div className='profile-pic-container' style={{ textAlign: 'center' }}>
        <img
          src={profilePicUrl || require('../assets/employee.png')}
          alt='Profile'
          width='150px'
          height='150px'
          style={{ borderRadius: '50%' }}
        />
        <div className='profile-pic-actions'>
          <button onClick={() => document.getElementById('fileInput')?.click()}>
            Edit
          </button>
          <button onClick={handleDeleteProfilePic}>Delete</button>
        </div>
        <input
          type='file'
          id='fileInput'
          style={{ display: 'none' }}
          accept='image/*'
          onChange={handleFileChange}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className='profile-form'
        encType='multipart/form-data'
      >
        <table className='input-table'>
          <tbody>
            {Object.entries(userData).map(([key, value]) => {
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
              return null
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
