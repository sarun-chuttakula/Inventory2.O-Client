import { BASE_API_URL } from './api-resource'

export const createAc = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ac`, {
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

export const getAcs = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ac`, {
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

export const getAc = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ac/${id}`, {
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

export const updateAc = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ac/${id}`, {
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

export const deleteAc = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/ac/${id}`, {
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
