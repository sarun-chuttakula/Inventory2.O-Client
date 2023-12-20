import Table from 'react-bootstrap/Table'
import React from 'react'
import MainNavbar from '../navbar'
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
      <h3 style={{ textAlign: 'center' }}>INVENTORY AUDIT SHEET</h3>
      <Table bordered>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <a
                  className='btn  btn-xl btn-outline-dark btn-info text-primary'
                  role='button'
                >
                  {row[0]}
                </a>
              </td>
              <td>
                <a
                  className='btn  btn-xl btn-outline-dark btn-info text-primary'
                  role='button'
                >
                  {row[1]}
                </a>
              </td>
              <td>
                <a
                  className='btn  btn-xl btn-outline-dark btn-info text-primary'
                  role='button'
                >
                  {row[2]}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}

export default Dashboard
