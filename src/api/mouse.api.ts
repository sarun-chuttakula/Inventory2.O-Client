import { BASE_API_URL } from './api-resource'

export const createMouse = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/mouse`, {
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

export const getMouses = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/mouse`, {
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

export const getMouse = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/mouse/${id}`, {
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

export const updateMouse = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/mouse/${id}`, {
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

export const deleteMouse = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/mouse/${id}`, {
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
