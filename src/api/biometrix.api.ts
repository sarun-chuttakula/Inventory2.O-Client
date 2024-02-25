import { BASE_API_URL } from './api-resource'

export const createBiometrix = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/biometrix`, {
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

export const getBiometrixs = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/biometrix`, {
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

export const getBiometrix = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/biometrix/${id}`, {
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

export const updateBiometrix = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/biometrix/${id}`, {
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

export const deleteBiometrix = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/biometrix/${id}`, {
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
