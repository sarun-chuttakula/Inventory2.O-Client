import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PurchaseDashboard() {
  const data = [['PurchaseRegister']]
  return (
    <>
      <>
        <div className='purchase-dashboard'></div>
        <h3 className='center-heading'>INVENTORY AUDIT SHEET</h3>
        <Table bordered>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((item, colIndex) => (
                  <td key={colIndex}>
                    <Link
                      to={`/purchase-dashboard/${item.toLowerCase()}`} // Use the item as part of the route
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
    </>
  )
}
