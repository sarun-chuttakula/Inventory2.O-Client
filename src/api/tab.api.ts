import { BASE_API_URL } from './api-resource'

export const createTab = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tab`, {
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

export const getTabs = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tab`, {
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

export const getTab = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tab/${id}`, {
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

export const updateTab = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tab/${id}`, {
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

export const deleteTab = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/tab/${id}`, {
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
