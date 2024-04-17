import React, { useState, useEffect } from 'react'
import { getAllAssets } from '../api/assets.api'
import useAuth from '../hooks/useAuth'
import { deleteDesktop } from '../api/desktop.api'
import '../styles/fetchAssets.css'
import { Link, useLocation } from 'react-router-dom'

const FetchAssets = () => {
  const location = useLocation()
  const [assetTypes, setAssetTypes] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [assetData, setAssetData] = useState<{ [key: string]: any[] }>({})
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
  const type = location.state?.asset_type || 'all'
  const assetType = app_assets.includes(type) ? type : 'all'

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = '1'
        if (token) {
          const response =
            assetType === 'all'
              ? await getAllAssets(token, page, 'all')
              : await getAllAssets(token, page, assetType)

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
  }, [token, assetType])

  const handleCopyToClipboard = (content: string) => {
    navigator.clipboard
      .writeText(content)
      .then(() => {
        console.log('Copied to clipboard:', content)
        // alert('Copied to clipboard!')
      })
      .catch((error) => {
        console.error('Failed to copy to clipboard:', error)
        // alert('Copy to clipboard failed.')
      })
  }

  const handleDelete = async (assetType: string, rowIndex: number) => {
    console.log(`Deleting asset ${assetType} at index ${rowIndex}`)
    try {
      const idToDelete = assetData[assetType][rowIndex].values[0].id
      const response = await deleteDesktop(token, idToDelete)
      console.log('Delete successful:', response)

      // Update the assetData state after deletion
      const updatedData = [...assetData[assetType]]
      updatedData.splice(rowIndex, 1) // Remove the deleted item
      setAssetData({ ...assetData, [assetType]: updatedData })
    } catch (error) {
      console.error('Delete failed:', error)
    }
  }

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (assetTypes.length === 0) {
    return <div>No assets available.</div>
  }

  return (
    <div>
      {assetTypes.map((assetType) => (
        <div key={assetType} className='assets-table-container'>
          <h2>{assetType}</h2>
          <table className='assets-table'>
            <thead>
              <tr>
                {assetData[assetType][0].headers.map((header: string) => (
                  <th key={header}>{header}</th>
                ))}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {assetData[assetType].map((asset: any, index: number) =>
                asset.values.map((value: any, valueIndex: number) => (
                  <tr key={`${index}-${valueIndex}`}>
                    {asset.headers.map((header: string, idx: number) => (
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
                          pathname: '/edit',
                        }}
                        state={{ assetType, rowData: value }}
                      >
                        Edit
                      </Link>
                      <button
                        className='action-button'
                        onClick={() => handleDelete(assetType, index)}
                      >
                        Delete
                      </button>
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
