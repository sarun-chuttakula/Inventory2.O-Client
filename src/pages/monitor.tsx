import React, { useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'
import {
  MakeOptions,
  CityOptions,
  OperatingSystem,
  ProcessorOptions,
  RAMOptions,
  StorageOptions,
  GraphicsOptions,
  StatusOptions,
} from '../enums'
import InputText from '../components/inputText/inputText'
import { monitorFormData } from '../dtos'
import useAuth from '../hooks/useAuth'
import { createMonitor } from '../api/monitor.api'
const MonitorAuditForm: React.FC = () => {
  const { authData } = useAuth()
  const token = authData?.accesstoken as string
  const [formData, setFormData] = useState<monitorFormData>({
    make: MakeOptions.Assembled,
    city: CityOptions.Hyderabad,
    model: '',
    tagid: '',
    hodtag: '',
    location: '',
    serialnumber: '',
    lan: '',
    wifi: '',
    processor: ProcessorOptions.Corei3,
    generation: '',
    os: OperatingSystem.Windows,
    osKey: '',
    hostname: '',
    ram: RAMOptions.GB4,
    storage: StorageOptions.GB64,
    graphics: GraphicsOptions.GB2,
    user: '',
    status: StatusOptions.Working,
    remarks: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    try {
      createMonitor(token, formData)
    } catch (err) {
      console.log(err)
    }
    msg()
  }
  //for radio button of status
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      status: event.target.value as StatusOptions,
    }))
  }

  //for alert message
  const msg = () => {
    alert('Your response is submitted')
  }

  return (
    <>
      <div>
        <h1 className='center-heading'>MONITOR AUDIT</h1>
        <form action='/monitor/register' method='POST' onSubmit={handleSubmit}>
          <Table bordered className='custom-table'>
            <tbody>
              <tr>
                <td colSpan={2}>
                  <Form.Label>Make:</Form.Label>
                </td>
                <td>
                  <Form.Select
                    aria-label='Make'
                    name='make'
                    value={formData.make}
                    style={{ width: '50%' }}
                    onChange={handleChange}
                  >
                    {Object.values(MakeOptions).map((makeOption) => (
                      <option key={makeOption} value={makeOption}>
                        {makeOption}
                      </option>
                    ))}
                  </Form.Select>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Label>City:</Form.Label>
                </td>
                <td>
                  <Form.Select
                    aria-label='City'
                    name='city'
                    value={formData.city}
                    style={{ width: '50%' }}
                    onChange={handleChange}
                  >
                    {Object.values(CityOptions).map((cityOption) => (
                      <option key={cityOption} value={cityOption}>
                        {cityOption}
                      </option>
                    ))}
                  </Form.Select>
                </td>
              </tr>
              <InputText
                label='Model Number'
                name='model'
                placeholder='Enter the Model Number'
                value={formData.model}
                onChange={handleChange}
              />
              <InputText
                label='Tag ID'
                name='tagid'
                placeholder='Enter the Tag ID'
                value={formData.tagid}
                onChange={handleChange}
              />
              <InputText
                label='HOD Tag'
                name='hodtag'
                placeholder='Enter the HOD Tag'
                value={formData.hodtag}
                onChange={handleChange}
              />
              <InputText
                label='Location'
                name='location'
                placeholder='Enter the Location'
                value={formData.location}
                onChange={handleChange}
              />
              <InputText
                label='Serial Number'
                name='serialnumber'
                placeholder='Enter the Serial Number'
                value={formData.serialnumber}
                onChange={handleChange}
              />
              <InputText
                label='User'
                name='user'
                placeholder='Enter the User'
                value={formData.user}
                onChange={handleChange}
              />
              <tr>
                <td colSpan={2}>
                  <Form.Label>Status:</Form.Label>
                </td>
                <td>
                  {Object.values(StatusOptions).map((statusOption) => (
                    <Form.Check
                      key={statusOption}
                      type='radio'
                      label={statusOption}
                      value={statusOption}
                      checked={formData.status === statusOption}
                      onChange={handleRadioChange}
                    />
                  ))}
                </td>
              </tr>
              <InputText
                label='Remarks'
                name='remarks'
                placeholder='Enter the Remarks'
                value={formData.remarks}
                onChange={handleChange}
              />

              <tr>
                <td colSpan={3}>
                  <Button
                    type='submit'
                    variant='primary'
                    style={{ width: '50%' }}
                  >
                    Submit
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    </>
  )
}

export default MonitorAuditForm
