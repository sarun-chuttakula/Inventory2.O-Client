import { BASE_API_URL } from './api-resource'

export const createMedicine = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/medicine`, {
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

export const getMedicines = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/medicine`, {
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

export const getMedicine = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/medicine/${id}`, {
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

export const updateMedicine = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/medicine/${id}`, {
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

export const deleteMedicine = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/medicine/${id}`, {
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
