import { BASE_API_URL } from './api-resource'

export const createUps = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ups`, {
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

export const getUpss = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ups`, {
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

export const getUps = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ups/${id}`, {
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

export const updateUps = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ups/${id}`, {
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

export const deleteUps = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ups/${id}`, {
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
