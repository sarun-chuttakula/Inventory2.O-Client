// apiService.js

import { Desktop_URL } from '.'
import { desktopFormData } from '../dtos'
import httpStatus from 'http-status'
const apiService = {
  postDesktopData: async (formData: desktopFormData, token: string) => {
    try {
      const response = await fetch(`${Desktop_URL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      if (response.status === httpStatus.CREATED) {
        const responseBody = await response.json()
        return { status: httpStatus.CREATED, data: responseBody }
      }
      return { status: response.status, data: null }
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  },
}

export default apiService
