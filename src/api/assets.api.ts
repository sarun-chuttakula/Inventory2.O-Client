import { BASE_API_URL } from './api-resource'

export const getAllAssets = async (
  token: string,
  page: string,
  assets_type: string,
) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/assets?page=${page}&asset_type=${assets_type}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    return response.json()
  } catch (error) {
    return error
  }
}

export const updateAsset = async (
  token: string,
  id: string,
  asset_type: string,
  data: any,
) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${asset_type}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    return response.json()
  } catch (error) {
    return error
  }
}

export const deleteAsset = async (
  token: string,
  id: string,
  asset_type: string,
) => {
  try {
    const response = await fetch(`${BASE_API_URL}/${asset_type}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    return response.json()
  } catch (error) {
    return error
  }
}
