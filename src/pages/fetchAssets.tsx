// FetchAssets.js

import React, { useState, useEffect } from 'react'
import { deleteAsset, getAllAssets } from '../api/assets.api'
import useAuth from '../hooks/useAuth'
import '../styles/fetchAssets.css'
import { Link } from 'react-router-dom'
import { FaTrash, FaEdit } from 'react-icons/fa'
const FetchAssets = () => {
  const [assetTypes, setAssetTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [assetData, setAssetData] = useState<{ [key: string]: any[] }>({})
  // const [selectedAssetType, setSelectedAssetType] = useState<string>(() => {
  //   const storedAssetType = localStorage.getItem('selectedAssetType')
  //   return storedAssetType || 'all'
  // })
  const [selectedAssetType, setSelectedAssetType] = useState<string>('all')
  const { authData } = useAuth()
  const token = authData?.accesstoken as string
  const app_assets = [
    'desktop',
    'laptop',
    'printer',
    'monitor',
    'tab',
    'tv',
    'airpurifier',
    'biometrix',
    'projector',
    'keyboard',
    'mouse',
    'router',
    'ups',
    'ac',
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = '1'
        if (token) {
          const response = await getAllAssets(token, page, selectedAssetType)

          const filteredAssets = response.data.map((asset: any) => ({
            assetType: asset.asset_type,
            values: asset.values || [],
          }))

          const nonEmptyAssets = filteredAssets.filter(
            (asset: any) => asset.values.length > 0,
          )

          const groupedAssets: { [key: string]: any[] } = {}
          nonEmptyAssets.forEach((asset: any) => {
            const headers = Object.keys(asset.values[0] || {})
            const assetKey = asset.assetType

            if (!groupedAssets[assetKey]) {
              groupedAssets[assetKey] = []
            }

            groupedAssets[assetKey].push({ headers, values: asset.values })
          })

          setAssetData(groupedAssets)
          setAssetTypes(Object.keys(groupedAssets))
        } else {
          throw new Error('Access token not found')
        }
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [token, selectedAssetType])

  const handleCopyToClipboard = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log('Copied to clipboard:', content)
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error)
      })
  }

  const handleDelete = async (assetType: string, rowIndex: number) => {
    console.log(`Deleting asset ${assetType} at index ${rowIndex}`)
    const shouldDelete = confirm('Are you sure you want to delete this asset?')
    if (!shouldDelete) {
      return
    }
    try {
      const idToDelete = assetData[assetType][rowIndex].values[0].id
      const response = await deleteAsset(token, idToDelete, assetType)
      console.log('Delete successful:', response)

      const updatedData = [...assetData[assetType]]
      updatedData.splice(rowIndex, 1)
      setAssetData({ ...assetData, [assetType]: updatedData })
    } catch (error) {
      console.error('Delete failed:', error)
    }
  }

  const handleAssetTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newAssetType = e.target.value
    setSelectedAssetType(newAssetType)
    localStorage.setItem('selectedAssetType', newAssetType)
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (assetTypes.length === 0) {
    return (
      <>
        <div className='assets-header'>
          <h2>Asset Types</h2>
          {/* Accessible label for asset type selector */}
          <label htmlFor='assetTypeSelect'>Select Asset Type:</label>
          <select
            id='assetTypeSelect'
            value={selectedAssetType}
            onChange={handleAssetTypeChange}
            className='asset-type-select'
          >
            <option value='all'>All</option>
            {app_assets.map((assetType) => (
              <option key={assetType} value={assetType}>
                {assetType}
              </option>
            ))}
          </select>
        </div>
        <div>No assets available.</div>
      </>
    )
  }

  return (
    <div>
      <div className='assets-header'>
        <h2>Asset Types</h2>
        {/* Accessible label for asset type selector */}
        <label htmlFor='assetTypeSelect'>Select Asset Type:</label>
        <select
          id='assetTypeSelect'
          value={selectedAssetType}
          onChange={handleAssetTypeChange}
          className='asset-type-select'
        >
          <option value='all'>All</option>
          {app_assets.map((assetType) => (
            <option key={assetType} value={assetType}>
              {assetType}
            </option>
          ))}
        </select>
      </div>
      {assetTypes.map((assetType) => (
        <div key={assetType} className='assets-table-container'>
          <h2>{assetType}</h2>
          <table className='assets-table'>
            <thead>
              <tr>
                {assetData[assetType][0].headers
                  .filter(
                    (header: string) =>
                      ![
                        'id',
                        'created_at',
                        'updated_at',
                        'created_by',
                        'updated_by',
                        'is_active',
                      ].includes(header),
                  )
                  .map((header: string) => (
                    <th key={header}>{header}</th>
                  ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assetData[assetType].map((asset: any, index: number) =>
                asset.values.map((value: any, valueIndex: number) => (
                  <tr key={`${index}-${valueIndex}`}>
                    {asset.headers
                      .filter(
                        (header: string) =>
                          ![
                            'id',
                            'created_at',
                            'updated_at',
                            'created_by',
                            'updated_by',
                            'is_active',
                          ].includes(header),
                      )
                      .map((header: string, idx: number) => (
                        <td
                          key={idx}
                          onClick={() => handleCopyToClipboard(value[header])}
                        >
                          {value[header]}
                        </td>
                      ))}
                    <td>
                      <Link
                        className='action-link'
                        to={{
                          pathname: '/it-dashboard/edit',
                        }}
                        state={{ assetType, rowData: value }}
                      >
                        <FaEdit className='edit-icon' />
                      </Link>
                      <FaTrash
                        className='delete-icon'
                        onClick={() => handleDelete(assetType, index)}
                      />
                      {/* <button
                        className='action-button'
                        onClick={() => handleDelete(assetType, index)}
                      >
                        Delete
                      </button> */}
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default FetchAssets
