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
  const type = location.state?.asset_type || null

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
          const assetType = app_assets.includes(type) ? type : ''
          console.log(type, 'a', assetType)
          const response = await getAllAssets(token, page, assetType)
          const assetData = response.data[0]
          setAssets(assetData)
          if (assetData.length > 0) {
            const headers = Object.keys(assetData[0])
            setTableHeaders(headers)
            setAssets(assetData)
          } else {
            setTableHeaders([])
            setAssets([])
          }
          setLoading(false)
        } else {
          throw new Error('Access token not found')
        }
      } catch (error: any) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [])

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
            <tr key={index}>
              {tableHeaders.map((header) => (
                <td key={header}>{asset[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FetchAssets
