// Dashboard.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'
import '../styles/styles.css'
import { useSelector } from 'react-redux'
import useAuth from '../hooks/useAuth'

function Dashboard() {
  const auth = useAuth()
  console.log('Auth:', auth)
  const userData = useSelector((state: any) => state.user.userData)
  console.log('userData', userData)

  const data = [
    ['Desktop', 'Laptop', 'Printer'],
    // ['Monitor', 'Tab/IPAD/MOBILE', 'TV'],
    ['Monitor', 'Tab', 'TV'],
    ['Keyboard', 'Mouse', 'Router'],
    ['Airpurifier', 'Biometrix', 'Projector'],
    ['UPS', 'AC'],
  ]

  return (
    <>
      <h3 className='center-heading'>INVENTORY AUDIT SHEET</h3>
      <Table bordered>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, colIndex) => (
                <td key={colIndex}>
                  <Link
                    to={`/it-dashboard/${item.toLowerCase()}`} // Use the item as part of the route
                    className='assets'
                    role='button'
                  >
                    {item}
                  </Link>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Dashboard
