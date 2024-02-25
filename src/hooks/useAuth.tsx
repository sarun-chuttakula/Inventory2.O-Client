// useAuth.js
import { useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'

const useAuth = () => {
  const { authData } = useContext(AuthContext)
  return authData
}

export default useAuth
