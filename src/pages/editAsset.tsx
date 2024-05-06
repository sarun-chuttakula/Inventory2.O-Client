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

  // Define the unwanted headers to be removed
  const unwantedHeaders = [
    'id',
    'created_at',
    'updated_at',
    'created_by',
    'updated_by',
    'is_active',
    'updatedbyname',
  ]

  return (
    <div className='editasset-container'>
      <h1 className='main-heading'>Edit Asset</h1>
      <p className='side-heading'>Asset Type: {assetType}</p>
      <form onSubmit={handleSubmit} className='edit-form'>
        <div className='edit-container'>
          {Object.entries(editedData)
            // Filter out unwanted headers
            .filter(([key]) => !unwantedHeaders.includes(key))
            .map(([key, value], index, array) => (
              // <div className='edit-field' key={key}>
              <div
                className={`edit-field ${
                  index === array.length - 1 && array.length % 2 !== 0
                    ? 'full-width'
                    : ''
                }`}
                key={key}
              >
                <div className='edit-field-inner'>
                  <label htmlFor={key} className='edit-label'>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                  </label>
                  {/* Render a dropdown for the "make" field */}
                  {key === 'make' ? (
                    <select
                      id={key}
                      value={value}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      className='edit-input'
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
                      className='edit-input'
                    />
                  )}
                </div>
              </div>
            ))}
        </div>
        <button className='edit-submit' type='submit'>
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditAssetPage
