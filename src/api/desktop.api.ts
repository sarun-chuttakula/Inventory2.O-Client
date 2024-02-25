import { BASE_API_URL } from './api-resource'

export const createDesktop = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/desktop`, {
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

export const getDesktops = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/desktop`, {
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

export const getDesktop = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/desktop/${id}`, {
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

export const updateDesktop = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/desktop/${id}`, {
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

export const deleteDesktop = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/desktop/${id}`, {
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
