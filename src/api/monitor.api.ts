import { BASE_API_URL } from './api-resource'

export const createMonitor = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/monitor`, {
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

export const getMonitors = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/monitor`, {
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

export const getMonitor = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/monitor/${id}`, {
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

export const updateMonitor = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/monitor/${id}`, {
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

export const deleteMonitor = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/monitor/${id}`, {
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
