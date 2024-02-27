import React from 'react'
import '../styles/purchase-register.css'
function PurchaseRegister() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission here
  }

  const fetchData = () => {
    // Implement fetch data functionality
  }

  const generateCapex = () => {
    // Implement generate Capex functionality
  }

  return (
    <>
      <h1>Purchase Register</h1>
      <form onSubmit={handleSubmit} id='dataForm'>
        <div className='form-group'>
          <h2>
            <label htmlFor='branch'>City (Branch):</label>
          </h2>
          <select id='branch' name='branch' className='form-control'>
            <option value='Hyderabad'>Hyderabad</option>
            <option value='Bangalore'>Bangalore</option>
            <option value='Mumbai'>Mumbai</option>
            <option value='Noida'>Noida</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='purchaseDate'>Date of Purchase:</label>
          </h2>
          <input
            type='date'
            id='purchaseDate'
            name='purchaseDate'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='vendor'>Vendor:</label>
          </h2>
          <input
            type='text'
            id='vendor'
            name='vendor'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='product'>Product:</label>
          </h2>
          <input
            type='text'
            id='product'
            name='product'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='description'>Product Description:</label>
          </h2>
          <textarea
            id='description'
            name='description'
            className='form-control'
            // maxlength='50'
          ></textarea>
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='brand'>Brand:</label>
          </h2>
          <input
            type='text'
            id='brand'
            name='brand'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='model'>Model:</label>
          </h2>
          <input
            type='text'
            id='model'
            name='model'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='serialNumber'>Serial Number:</label>
          </h2>
          <input
            type='text'
            id='serialNumber'
            name='serialNumber'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='quantity'>Qty:</label>
          </h2>
          <input
            type='number'
            id='quantity'
            name='quantity'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='rate'>Rate (Currency):</label>
          </h2>
          <input
            type='text'
            id='rate'
            name='rate'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='amount'>Amount (Currency):</label>
          </h2>
          <input
            type='text'
            id='amount'
            name='amount'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label>Capex:</label>
          </h2>
          <div className='form-check'>
            <label htmlFor='capexYes' className='form-check-label'>
              Yes
            </label>
            <input
              type='radio'
              id='capexYes'
              name='capex'
              value='Yes'
              className='form-check-input'
              required
            />
          </div>
          <div className='form-check'>
            <label htmlFor='capexNo' className='form-check-label'>
              No
            </label>
            <input
              type='radio'
              id='capexNo'
              name='capex'
              value='No'
              className='form-check-input'
              required
            />
          </div>
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='endUser'>End User:</label>
          </h2>
          <input
            type='text'
            id='endUser'
            name='endUser'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='empCode'>Employee Code:</label>
          </h2>
          <input
            type='text'
            id='empCode'
            name='empCode'
            className='form-control'
            required
          />
        </div>

        <div className='form-group'>
          <h2>
            <label htmlFor='department'>Department:</label>
          </h2>
          <input
            type='text'
            id='department'
            name='department'
            className='form-control'
            required
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <button type='reset' className='btn btn-secondary'>
          Reset
        </button>
        <button type='button' className='btn btn-success' onClick={fetchData}>
          Fetch
        </button>
        <button
          type='button'
          className='btn btn-warning'
          onClick={generateCapex}
        >
          Generate Capex
        </button>
      </form>
    </>
  )
}

export default PurchaseRegister
