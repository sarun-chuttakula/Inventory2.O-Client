import { BASE_API_URL } from './api-resource'

export const createTV = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tv`, {
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

export const getTVs = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tv`, {
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

export const getTV = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tv/${id}`, {
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

export const updateTV = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tv/${id}`, {
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

export const deleteTV = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tv/${id}`, {
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
