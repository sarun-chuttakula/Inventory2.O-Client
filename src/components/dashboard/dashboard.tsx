// Dashboard.jsx

import React from 'react'
import { Table } from 'react-bootstrap'
import MainNavbar from '../navbar/navbar'
import './styles.css' // Import the CSS file

function Dashboard() {
  const data = [
    ['Desktop', 'Laptop', 'Printer'],
    ['Monitor', 'Tab/IPAD/MOBILE', 'TV'],
    ['Keyboard', 'Mouse', 'Router'],
    ['Airpurifier', 'Biometrix', 'Projector'],
    ['UPS', 'AC'],
  ]

  return (
    <>
      <MainNavbar />
      <h3 className='center-heading'>INVENTORY AUDIT SHEET</h3>
      <Table bordered>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, colIndex) => (
                <td key={colIndex}>
                  <a
                    className='btn btn-xl btn-outline-dark btn-info text-primary'
                    role='button'
                  >
                    {item}
                  </a>
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
