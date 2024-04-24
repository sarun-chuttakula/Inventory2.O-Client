import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import InputText from '../components/inputText/inputText'

// import { medicineFormData } from '../dtos'
import { createMedicine } from '../api/medicine.api'
import useAuth from '../hooks/useAuth'

const Medicine: React.FC = () => {
  const { authData } = useAuth()
  const token = authData?.accesstoken as string
  const [formData, setFormData] = useState<any>({
    medicine_name: '',
    vendor: '',
    batch_no: '',
    medicine_quantity: '',
    medicine_date_of_purchase: '',
    medicine_expiry_date: '',
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
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Medicine</h1>
      <Form onSubmit={handleSubmit}>
        <InputText
          label='Medicine Name'
          name='medicine_name'
          placeholder='Enter pantry item name'
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
        <InputText
          label='Quantity'
          name='quantity'
          placeholder='Enter quantity'
          value={formData.medicine_quantity}
          onChange={handleChange}
        />
        <InputText
          label='Date of Purchase'
          name='date_of_purchase'
          placeholder='Enter date of purchase'
          value={formData.medicine_date_of_purchase}
          onChange={handleChange}
        />
        <InputText
          label='Expiry Date'
          name='expiry_date'
          placeholder='Enter expiry date'
          value={formData.medicine_expiry_date}
          onChange={handleChange}
        />
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Medicine
