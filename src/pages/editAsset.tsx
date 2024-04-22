import React, { useState, FormEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { updateAsset } from '../api/assets.api'
import useAuth from '../hooks/useAuth'
import '../styles/editAsset.css'

const EditAssetPage: React.FC = () => {
  const location = useLocation()
  const { assetType, rowData } = location.state
  const [editedData, setEditedData] = useState<{ [key: string]: string }>(
    rowData,
  )
  const { authData } = useAuth()
  const token = authData?.accesstoken as string

  const handleInputChange = (key: string, value: string) => {
    setEditedData({
      ...editedData,
      [key]: value,
    })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Updated Data:', editedData)

    try {
      const response = await updateAsset(
        token,
        rowData.id,
        assetType,
        editedData,
      )
      setEditedData(response.data)
      console.log('Update response:', response)
    } catch (error) {
      console.error('Update failed:', error)
    }
  }

  // Dropdown options for "make" field
  const makeOptions = ['dell', 'hp', 'assembled', 'lenovo', 'others']

  return (
    <div>
      <h1>Edit Asset</h1>
      <p>Asset Type: {assetType}</p>
      <form onSubmit={handleSubmit}>
        {Object.entries(editedData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key}>{key}:</label>
            {/* Render a dropdown for the "make" field */}
            {key === 'make' ? (
              <select
                id={key}
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              >
                {makeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              // Render an input field for other fields
              <input
                type='text'
                id={key}
                value={value}
                onChange={(e) => handleInputChange(key, e.target.value)}
              />
            )}
          </div>
        ))}
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default EditAssetPage
