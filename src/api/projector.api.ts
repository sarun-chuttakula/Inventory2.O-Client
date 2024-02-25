import { BASE_API_URL } from './api-resource'

export const createProjector = async (token: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/projector`, {
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

export const getProjectors = async (token: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/projector`, {
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

export const getProjector = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/projector/${id}`, {
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

export const updateProjector = async (token: string, id: string, data: any) => {
  try {
    const response = await fetch(`${BASE_API_URL}/projector/${id}`, {
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

export const deleteProjector = async (token: string, id: string) => {
  try {
    const response = await fetch(`${BASE_API_URL}/projector/${id}`, {
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
