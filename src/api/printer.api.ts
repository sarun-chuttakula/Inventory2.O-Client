import { BASE_API_URL } from './api-resource'

export const createPrinter = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/printer`, {
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

export const getPrinters = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/printer`, {
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

export const getPrinter = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/printer/${id}`, {
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

export const updatePrinter = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/printer/${id}`, {
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

export const deletePrinter = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/printer/${id}`, {
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
