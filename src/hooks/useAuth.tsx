// useAuth.js
import { useContext } from 'react'
import AuthContext from '../contexts/AuthProvider'

const useAuth = () => {
  const { authData, setAuth, logout } = useContext(AuthContext)
  return { authData, setAuth, logout }
}

export default useAuth
