import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import InputText from '../components/inputText/inputText'
import { pantryFormData } from '../dtos'
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
      <h1>Pantry</h1>
      <Form onSubmit={handleSubmit}>
        <InputText
          label='Item Name'
          name='item_name'
          placeholder='Enter pantry item name'
          value={formData.item_name}
          onChange={handleChange}
        />
        <InputText
          label='Item Description'
          name='item_description'
          placeholder='Enter pantry item description'
          value={formData.item_description}
          onChange={handleChange}
        />
        <div className='Quatity'>
          <label>Item Quantity:</label>
          <input
            type='number'
            name='item_quantity'
            placeholder='Enter pantry item quantity'
            value={formData.item_quantity}
            onChange={handleChange}
          />
        </div>
        <div className='item_date_of_purchase'>
          <label>Item Date of Purchase:</label>
          <input
            type='date'
            name='item_date_of_purchase'
            value={formData.item_date_of_purchase}
            placeholder='Enter pantry item date of purchase'
            onChange={handleChange}
          />
        </div>
        <div className='item_expiry_date'>
          <label>Item Expiry Date:</label>
          <input
            type='date'
            name='item_expiry_date'
            value={formData.item_expiry_date}
            placeholder='Enter pantry item expiry date'
            onChange={handleChange}
          />
        </div>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Pantry
