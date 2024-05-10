import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import InputText from '../components/inputText/inputText'
import { createPantry } from '../api/pantry.api'
import useAuth from '../hooks/useAuth'

const Pantry: React.FC = () => {
  const { authData } = useAuth()
  const token = authData?.accesstoken as string
  const [formData, setFormData] = useState<any>({
    item_name: '',
    item_description: '',
    item_quantity: 0,
    item_date_of_purchase: new Date().toISOString().split('T')[0],
    item_expiry_date: new Date().toISOString().split('T')[0],
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData: any) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      await createPantry(token, formData)
      console.log('Pantry item created successfully')
    } catch (err) {
      console.error('Error creating pantry item:', err)
    }
  }

  return (
    <div>
      <h1 className='center-heading'>Pantry</h1>
      <Form onSubmit={handleSubmit}>
        <Table bordered className='custom-table'>
          <tbody>
            <InputText
              label='Name'
              name='item_name'
              placeholder='Enter pantry item name'
              value={formData.item_name}
              onChange={handleChange}
            />

            <InputText
              label='Description'
              name='item_description'
              placeholder='Enter pantry item description'
              value={formData.item_description}
              onChange={handleChange}
            />
            <tr>
              <td colSpan={2}>
                <Form.Label>Item Quantity:</Form.Label>
              </td>
              <td>
                <input
                  type='number'
                  name='item_quantity'
                  placeholder='Enter pantry item quantity'
                  value={formData.item_quantity}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Form.Label>Item Date of Purchase:</Form.Label>
              </td>
              <td>
                <input
                  type='date'
                  name='item_date_of_purchase'
                  value={formData.item_date_of_purchase}
                  placeholder='Enter pantry item date of purchase'
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <Form.Label>Item Expiry Date:</Form.Label>
              </td>
              <td>
                <input
                  type='date'
                  name='item_expiry_date'
                  value={formData.item_expiry_date}
                  placeholder='Enter pantry item expiry date'
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}></td>
              <td colSpan={3}>
                <Button type='submit' variant='primary'>
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </Form>
    </div>
  )
}

export default Pantry
