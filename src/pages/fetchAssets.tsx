import React, { useState, useEffect } from 'react'
import { getAllAssets } from '../api/assets.api'
import useAuth from '../hooks/useAuth'
import '../styles/fetchAssets.css'
import { useLocation } from 'react-router-dom'

const FetchAssets = () => {
  const location = useLocation()
  const [assets, setAssets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [tableHeaders, setTableHeaders] = useState<string[]>([])

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
          let response
          if (assetType === 'all') {
            // Fetch all assets in a single API call
            response = await getAllAssets(token, page, 'all')
          } else {
            // Fetch assets for the specific type
            response = await getAllAssets(token, page, assetType)
          }

          const filteredAssets = response.data.map((asset: any) => ({
            assetType: asset.asset_type,
            values: asset.values || [],
          }))

          const nonEmptyAssets = filteredAssets.filter(
            (asset: any) => asset.values.length > 0,
          )

          if (nonEmptyAssets.length > 0) {
            const headers = Object.keys(nonEmptyAssets[0].values[0] || {})
            setTableHeaders(headers)
            setAssets(nonEmptyAssets)
          } else {
            setTableHeaders([])
            setAssets([])
          }
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
  }, [token, type])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (assets.length === 0) {
    return <div>No assets available.</div>
  }

  return (
    <div>
      <table className='assets-table'>
        <thead>
          <tr>
            {tableHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, index) => (
            <React.Fragment key={index}>
              <tr>
                <th colSpan={tableHeaders.length}>{asset.assetType}</th>
              </tr>
              {asset.values.map((assetData: any, idx: number) => (
                <tr key={`${index}-${idx}`}>
                  {tableHeaders.map((header) => (
                    <td key={header}>{assetData[header]}</td>
                  ))}
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchAssets
