import React, { useState, FormEvent } from 'react'
import { useLocation } from 'react-router-dom'

const EditAssetPage: React.FC = () => {
  const location = useLocation()
  const { assetType, rowData } = location.state
  const [editedData, setEditedData] = useState<{ [key: string]: string }>(
    rowData,
  )

  const handleInputChange = (key: string, value: string) => {
    setEditedData({
      ...editedData,
      [key]: value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Updated Data:', editedData)
  }

  return (
    <div>
      <h1>Edit Asset</h1>
      <p>Asset Type: {assetType}</p>
      <form onSubmit={handleSubmit}>
        {Object.entries(editedData).map(([key, value]) => (
          <div key={key}>
            <label htmlFor={key}>{key}:</label>
            <input
              type='text'
              id={key}
              value={value}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          </div>
        ))}
        <button type='submit'>Save Changes</button>
      </form>
    </div>
  )
}

export default EditAssetPage
