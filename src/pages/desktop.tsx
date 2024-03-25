import React, { useState } from 'react'
import { Button, Form, InputGroup, Table } from 'react-bootstrap'
import '../styles/desktop.css'
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
import { desktopFormData } from '../dtos'
import { createDesktop } from '../api/desktop.api'
import useAuth from '../hooks/useAuth'
const DesktopAuditForm: React.FC = () => {
  const { authData } = useAuth()
  const token = authData?.accesstoken as string
  const [formData, setFormData] = useState<desktopFormData>({
    make: MakeOptions.Assembled,
    city: CityOptions.Hyderabad,
    model: '',
    tagid: '',
    hodtag: '',
    location: '',
    serialnumber: '',
    macid_lan: '',
    macid_wifi: '',
    processor: ProcessorOptions.Corei3,
    generation: '',
    os: OperatingSystem.Windows,
    oskey: '',
    hostname: '',
    ram: RAMOptions.GB4,
    storage: StorageOptions.GB64,
    graphics: GraphicsOptions.GB2,
    user: '',
    status: StatusOptions.Working,
    remarks: '',
    updatedbyname: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      createDesktop(token, formData).then((data) => {
        console.log('Data:', data)
        if (data.success) {
          console.log('Data:', data)
          alert('Your response is submitted')
        } else {
          console.log('Error:', data)
        }
      })
    } catch (error) {
      console.error('Error:', error)
    }
  }

  //for radio button of status
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      status: event.target.value as StatusOptions,
    }))
  }

  //for radio buttion of RAM
  const handleRAMChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      ram: event.target.value as RAMOptions,
    }))
  }

  //for radio button of OS
  const [selectedOS, setSelectedOS] = useState<string>('Windows')
  const handleOSChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedOS = event.target.value as OperatingSystem
    setSelectedOS(selectedOS)

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      os: selectedOS,
      // Reset processor to default when OS changes
      processor:
        selectedOS === OperatingSystem.Mac
          ? ProcessorOptions.M1
          : ProcessorOptions.Corei3,
    }))
  }

  //for radio button for Processor
  const handleProcessorChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      processor: event.target.value as ProcessorOptions,
    }))
  }

  //for radio button for Storage
  const handleStorageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      storage: event.target.value as StorageOptions,
    }))
  }

  //for radio button for Graphics
  const handleGraphicsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      graphics: event.target.value as GraphicsOptions,
    }))
  }

  const renderProcessorOptions = () => {
    const processorOptionsToRender =
      selectedOS === OperatingSystem.Mac
        ? [ProcessorOptions.M1, ProcessorOptions.M2]
        : Object.values(ProcessorOptions).filter(
            (option) =>
              option !== ProcessorOptions.M1 && option !== ProcessorOptions.M2,
          )

    return processorOptionsToRender.map((processorOption) => (
      <Form.Check
        key={processorOption}
        type='radio'
        label={processorOption}
        value={processorOption}
        checked={formData.processor === processorOption}
        onChange={handleProcessorChange}
      />
    ))
  }

  return (
    <>
      <div>
        <h1 className='center-heading'>DESKTOP AUDIT</h1>
        <form action='/Desktop/register' method='POST' onSubmit={handleSubmit}>
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
              <tr>
                <td rowSpan={2}>
                  <Form.Label>MAC Address:</Form.Label>
                </td>
                <td>
                  <Form.Label>LAN:</Form.Label>
                </td>
                <td>
                  <InputGroup className='mb-3' style={{ width: '50%' }}>
                    <Form.Control
                      placeholder='Enter the LAN'
                      aria-label='LAN'
                      aria-describedby='basic-addon1'
                    />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Label>WiFi:</Form.Label>
                </td>
                <td>
                  <InputGroup className='mb-3' style={{ width: '50%' }}>
                    <Form.Control
                      placeholder='Enter the WiFi'
                      aria-label='WiFi'
                      aria-describedby='basic-addon1'
                    />
                  </InputGroup>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Label>Operating System:</Form.Label>
                </td>
                <td>
                  {Object.values(OperatingSystem).map((osOption) => (
                    <Form.Check
                      key={osOption}
                      type='radio'
                      label={osOption}
                      value={osOption}
                      checked={formData.os === osOption}
                      onChange={handleOSChange}
                    />
                  ))}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Label>Processor:</Form.Label>
                </td>
                <td>{renderProcessorOptions()}</td>
              </tr>
              <InputText
                label='Generation'
                name='generation'
                placeholder='Enter the Generation'
                value={formData.generation}
                onChange={handleChange}
              />
              <InputText
                label='OS Key'
                name='oskey'
                placeholder='Enter the OS Key'
                value={formData.oskey}
                onChange={handleChange}
              />
              <InputText
                label='Hostname'
                name='hostname'
                placeholder='Enter the Hostname'
                value={formData.hostname}
                onChange={handleChange}
              />
              <tr>
                <td colSpan={2}>
                  <Form.Label>RAM:</Form.Label>
                </td>
                <td>
                  {Object.values(RAMOptions).map((ramOption) => (
                    <Form.Check
                      key={ramOption}
                      type='radio'
                      label={ramOption}
                      value={ramOption}
                      checked={formData.ram === ramOption}
                      onChange={handleRAMChange}
                    />
                  ))}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Label>Storage:</Form.Label>
                </td>
                <td>
                  {Object.values(StorageOptions).map((storageOption) => (
                    <Form.Check
                      key={storageOption}
                      type='radio'
                      label={storageOption}
                      value={storageOption}
                      checked={formData.storage === storageOption}
                      onChange={handleStorageChange}
                    />
                  ))}
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <Form.Label>Graphics:</Form.Label>
                </td>
                <td>
                  {Object.values(GraphicsOptions).map((graphicsOption) => (
                    <Form.Check
                      key={graphicsOption}
                      type='radio'
                      label={graphicsOption}
                      value={graphicsOption}
                      checked={formData.graphics === graphicsOption}
                      onChange={handleGraphicsChange}
                    />
                  ))}
                </td>
              </tr>
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
              <InputText
                label='Updated By'
                name='updatedbyname'
                placeholder='Enter the Updated By'
                value={formData.updatedbyname}
                onChange={handleChange}
              />
              <tr>
                <td colSpan={2}></td>
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

export default DesktopAuditForm
