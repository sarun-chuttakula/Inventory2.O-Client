import React, { useState, useEffect } from 'react'
import { getAllAssets } from '../api/assets.api'
import useAuth from '../hooks/useAuth'
import '../styles/fetchAssets.css'
import { useLocation } from 'react-router-dom'

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
        <div key={assetType}>
          <h2>{assetType}</h2>
          <table className='assets-table'>
            <thead>
              <tr>
                {assetData[assetType][0].headers.map((header: string) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {assetData[assetType].map((asset: any, index: number) => (
                <tr key={index}>
                  {asset.headers.map((header: string, idx: number) => (
                    <td key={idx}>{asset.values[0][header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}

export default FetchAssets
