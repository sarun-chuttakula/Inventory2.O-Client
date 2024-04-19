import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' // Import useDispatch hook
import { login } from '../redux/actions/userActions' // Import the login action
import { Login } from '../api'
import { ApiResponse } from '../dtos/response.dto'
import AuthContext from '../contexts/AuthProvider'
// import { useAuth0 } from "@auth0/auth0-react";
import '../styles/loginPage.css'
import { Link } from 'react-router-dom'

const LoginScreen: React.FC = () => {
  const navigate = useNavigate()
  // const { loginWithRedirect, isAuthenticated, user } = useAuth0()

  // const handleLogin = () => {
  //   loginWithRedirect()
  //   console.log('User:', user)
  //   console.log('IsAuthenticated:', isAuthenticated)
  // }
  const { setAuth } = useContext(AuthContext)
  const dispatch = useDispatch() // Initialize useDispatch hook

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const userData = useSelector((state: any) => state.user.userData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response: ApiResponse = await Login(formData)
    if (response.success) {
      console.log('Token:', response.data.accesstoken)
      localStorage.setItem('token', response.data.accesstoken)
      setAuth(response.data)
      const userData = response.data
      console.log('User Data1:', userData)
      // Dispatch the login action with user data
      dispatch(login(userData))
      navigate('/')
    } else {
      navigate('/login')
    }
  }
  console.log('User Data:', userData)

  return (
    <div className='main-container'>
      <div className='logincontainer'>
        <div className='content-container'>
          <div>
            <h3>Welcome Back!</h3>
            {/* <p>We are so happy to have you here. <br/>It's great to see you again.</p> */}
          </div>
          <div>
            <br />
            <p>Don&apos;t have an account?</p>
            <button className='login-btn'>
              <Link className='sign-up-link' to='/register'>
                Sign Up
              </Link>
            </button>
          </div>
        </div>
        <div className='login-container'>
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <input
              type='text'
              placeholder='Username'
              name='username'
              value={formData.username}
              onChange={handleChange}
              required
            />
            <br />
            <input
              type='password'
              placeholder='Password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <br />
            {/* <div className="password-container">
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="password-input"
                            />
                            <span className="toggle-password" onClick={handleToggle}>
                                <Icon icon={icon} size={15} />
                            </span>
                        </div> */}
            {/* <label className="remember-me">
                            <input type="checkbox"/>
                            Remember me
                        </label> */}
            {/* <input type="checkbox"/> Remember me */}
            &nbsp;&nbsp;<a href='/forgotPassword'>Forgot password</a>
            <br />
            <button
              className='login-btn'
              type='submit'
              style={{ textAlign: 'center' }}
            >
              Login
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
