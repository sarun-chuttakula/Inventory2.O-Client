import { BASE_API_URL } from './api-resource'

export const getAllAssets = async (
  token: string,
  page: string,
  assets_type: string,
) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/assets?page=${page}&assets_type=${assets_type}`,
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
