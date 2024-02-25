import { BASE_API_URL } from './api-resource'

export const createAirpurifier = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/airpurifier`, {
      method: 'POST',
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

export const getAirpurifiers = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/airpurifier`, {
      method: 'GET',
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

export const getAirpurifier = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/airpurifier/${id}`, {
      method: 'GET',
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

export const updateAirpurifier = async (
  token: string,
  id: string,
  data: any,
) => {
  try {
    const response = await fetch(`${BASE_API_URL}/airpurifier/${id}`, {
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

export const deleteAirpurifier = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/airpurifier/${id}`, {
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
