import { BASE_API_URL } from './api-resource'

export const getAllUsers = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/user`, {
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

export const updateUser = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/user/${id}`, {
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

export const deleteUser = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/user/${id}`, {
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

export const createUser = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/user`, {
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

export const getUserById = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/user/${id}`, {
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
