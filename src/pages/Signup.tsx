import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ApiResponse } from '../dtos/response.dto'
import { Register } from '../api'
import '../styles/signup.css'

const SignupScreen: React.FC = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstname: '',
    email: '',
    username: '',
    password: '',
  })
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const response: ApiResponse = await Register(formData)
    if (response.success) navigate('/dashboard')
    else navigate('/login')
  }
  return (
    <div className='main-container'>
      <div className='container'>
        <div className='login-container'>
          <form onSubmit={handleSubmit}>
            <h3>Sign Up</h3>
            <input
              type='text'
              placeholder='firstName'
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              placeholder='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type='text'
              placeholder='Username'
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type='password'
              placeholder='Password'
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button type='submit' style={{ textAlign: 'center' }}>
              Sign Up
            </button>
            <br />
          </form>
        </div>
        <div className='content-container'>
          <div>
            <h3>Welcome!</h3>
            <p>Please fill the details to signup.</p>
          </div>
          <div>
            <p>Already have an account?</p>
            <button type='submit' style={{ textAlign: 'center' }}>
              <a href='/login'>Login</a>
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupScreen
