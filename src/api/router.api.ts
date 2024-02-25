import { BASE_API_URL } from './api-resource'

export const createRouter = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/router`, {
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

export const getRouters = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/router`, {
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

export const getRouter = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/router/${id}`, {
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

export const updateRouter = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/router/${id}`, {
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

export const deleteRouter = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/router/${id}`, {
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
