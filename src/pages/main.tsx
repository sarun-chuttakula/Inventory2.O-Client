import React from 'react'
import '../styles/main.css'

export default function Main() {
  return (
    <div className='main-box'>
      <div className='card'>
        <div className='card-body'>
          <a href='/purchase-dashboard' className='card-title'>
            PO Dashboard
          </a>
        </div>
      </div>

      <div className='card'>
        <div className='card-body'>
          <a href='/it-dashboard' className='card-title'>
            IT Dashboard
          </a>
        </div>
      </div>
    </div>
  )
}
