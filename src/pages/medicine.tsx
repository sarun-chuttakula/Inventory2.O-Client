import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import InputText from '../components/inputText/inputText'
import { createMedicine } from '../api/medicine.api'
import useAuth from '../hooks/useAuth'

const Medicine: React.FC = () => {
  const { authData } = useAuth()
  const token = authData?.accesstoken as string
  const [formData, setFormData] = useState<any>({
    medicine_name: '',
    vendor: '',
    batch_no: '',
    medicine_quantity: 0,
    medicine_date_of_purchase: new Date(),
    medicine_expiry_date: new Date(),
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      createMedicine(token, formData)
      console.log('Medicine created successfully')
    } catch (err) {
      console.error('Error creating medicine:', err)
    }
  }

  return (
    <div>
      <h1 className='center-heading'>Medicine</h1>
      <Form onSubmit={handleSubmit}>
        <Table bordered className='custom-table'>
          <tbody>
            <InputText
              label='Medicine Name'
              name='medicine_name'
              placeholder='Enter medicine name'
              value={formData.medicine_name}
              onChange={handleChange}
            />
            <InputText
              label='Vendor'
              name='vendor'
              placeholder='Enter vendor name'
              value={formData.vendor}
              onChange={handleChange}
            />
            <InputText
              label='Batch No'
              name='batch_no'
              placeholder='Enter batch number'
              value={formData.batch_no}
              onChange={handleChange}
            />
            <tr>
              <td colSpan={2}>
                <Form.Label>Medicine Quantity:</Form.Label>
              </td>
              <td>
                <input
                  type='number'
                  name='medicine_quantity'
                  placeholder='Enter quantity'
                  value={formData.medicine_quantity}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Form.Label>Medicine Date of Purchase:</Form.Label>
              </td>
              <td>
                <input
                  type='date'
                  name='medicine_date_of_purchase'
                  placeholder='Enter Medicine date of purchase'
                  value={
                    formData.medicine_date_of_purchase
                      .toISOString()
                      .split('T')[0]
                  }
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Form.Label>Medicine Expiry Date:</Form.Label>
              </td>
              <td>
                <input
                  type='date'
                  name='medicine_expiry_date'
                  placeholder='Enter Medicine expiry date'
                  value={
                    formData.medicine_expiry_date.toISOString().split('T')[0]
                  }
                  onChange={handleChange}
                />
              </td>
            </tr>
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </tbody>
        </Table>
      </Form>
    </div>
  )
}

export default Medicine
