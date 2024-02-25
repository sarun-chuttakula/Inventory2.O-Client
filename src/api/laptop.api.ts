import { BASE_API_URL } from './api-resource'

export const createLaptop = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/laptop`, {
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

export const getLaptops = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/laptop`, {
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

export const getLaptop = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/laptop/${id}`, {
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

export const updateLaptop = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/laptop/${id}`, {
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

export const deleteLaptop = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/laptop/${id}`, {
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
