import { BASE_API_URL } from './api-resource'

export const createPantry = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pantry`, {
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

export const getPantry = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pantry`, {
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

export const getPantryItem = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pantry/${id}`, {
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

export const updatePantry = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pantry/${id}`, {
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

export const deletePantry = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/pantry/${id}`, {
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
