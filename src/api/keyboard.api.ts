import { BASE_API_URL } from './api-resource'

export const createKeyboard = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/keyboard`, {
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

export const getKeyboards = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/keyboard`, {
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

export const getKeyboard = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/keyboard/${id}`, {
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

export const updateKeyboard = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/keyboard/${id}`, {
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

export const deleteKeyboard = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/keyboard/${id}`, {
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
