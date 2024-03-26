import React, { useState, useEffect } from 'react'
import { getAllAssets } from '../api/assets.api'
import useAuth from '../hooks/useAuth'
import '../styles/fetchAssets.css'

const FetchAssets = () => {
  const [assets, setAssets] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [tableHeaders, setTableHeaders] = useState<string[]>([])

  const { authData } = useAuth()
  const token = authData?.accesstoken as string

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = '1'
        const asset_type = 'laptop'
        if (token) {
          const response = await getAllAssets(token, page, asset_type)
          const assetData = response.data
          setAssets(assetData)
          if (assetData.length > 0) {
            const headers = Object.keys(assetData[0])
            setTableHeaders(headers)
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
