import React, { useState } from 'react'
import { Form, InputGroup, Table } from 'react-bootstrap'
import MainNavbar from '../../navbar/navbar'
import './desktop.css'

enum MakeOptions {
  Assembled = 'Assembled',
  Dell = 'Dell',
  HP = 'HP',
  Lenovo = 'Lenovo',
  Others = 'Others',
}
enum CityOptions {
  Hyderabad = 'Hyderabad',
  Bangalore = 'Bangalore',
  Chennai = 'Chennai',
  Mumbai = 'Mumbai',
  Others = 'Others',
}
enum OperatingSystem {
  Windows = 'Windows',
  Linux = 'Linux',
  Mac = 'Mac',
  Others = 'Others',
}

enum ProcessorOptions {
  Corei3 = 'Core i3',
  Corei5 = 'Core i5',
  Corei7 = 'Core i7',
  Corei9 = 'Core i9',
  M1 = 'M1',
  M2 = 'M2',
  DualCore = 'Dual Core',
  QuadCore = 'Quad Core',
  AMD_RYZEN = 'AMD RYZEN',
  Others = 'Others',
}

// Enum for RAM options
enum RAMOptions {
  GB4 = '4GB',
  GB8 = '8GB',
  GB16 = '16GB',
  GB32 = '32GB',
  GB64 = '64GB',
}

// Enum for Storage options
enum StorageOptions {
  GB64 = '64GB',
  GB128 = '128GB',
  GB256 = '256GB',
  GB500 = '500GB',
  TB1 = '1TB',
}

// Enum for Graphics options
enum GraphicsOptions {
  GB2 = '2GB',
  GB4 = '4GB',
  GB8 = '8GB',
  GB16 = '16GB',
  NA = 'NA',
}

// Enum for Status options
enum StatusOptions {
  Working = 'Working',
  NotWorking = 'Not Working',
}
interface InputTextProps {
  label: string
  name: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const InputText: React.FC<InputTextProps> = ({
  label,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <tr>
      <td colSpan={2}>
        <Form.Label>{label}:</Form.Label>
      </td>
      <td>
        <InputGroup className='mb-3'>
          <Form.Control
            type='text'
            placeholder={placeholder}
            aria-label={name}
            aria-describedby='basic-addon1'
            name={name}
            value={value}
            onChange={onChange}
          />
        </InputGroup>
      </td>
    </tr>
  )
}

interface FormData {
  make: MakeOptions
  city: CityOptions
  model: string
  tagID: string
  hodTag: string
  location: string
  serialNumber: string
  lan: string
  wifi: string
  processor: ProcessorOptions
  generation: string
  os: OperatingSystem
  osKey: string
  hostname: string
  ram: RAMOptions
  storage: StorageOptions
  graphics: GraphicsOptions
  user: string
  status: StatusOptions
  remarks: string
  updatedBy: string
}

const DesktopAuditForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    make: MakeOptions.Assembled,
    city: CityOptions.Hyderabad,
    model: '',
    tagID: '',
    hodTag: '',
    location: '',
    serialNumber: '',
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
    updatedBy: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Perform form submission logic here
    msg()
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

  //for alert message
  const msg = () => {
    alert('Your response is submitted')
  }

  return (
    <>
      <MainNavbar />
      <div>
        <h1 className='center-heading'>DESKTOP AUDIT</h1>
        <form action='/Desktop/register' method='POST' onSubmit={handleSubmit}>
          <Table bordered>
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
                name='tagID'
                placeholder='Enter the Tag ID'
                value={formData.tagID}
                onChange={handleChange}
              />
              <InputText
                label='HOD Tag'
                name='hodTag'
                placeholder='Enter the HOD Tag'
                value={formData.hodTag}
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
                name='serialNumber'
                placeholder='Enter the Serial Number'
                value={formData.serialNumber}
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
                  <InputGroup className='mb-3'>
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
                  <InputGroup className='mb-3'>
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
                <td>
                  <td>{renderProcessorOptions()}</td>
                </td>
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
                name='osKey'
                placeholder='Enter the OS Key'
                value={formData.osKey}
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
                name='updatedBy'
                placeholder='Enter the Updated By'
                value={formData.updatedBy}
                onChange={handleChange}
              />
              <tr>
                <td colSpan={3}>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
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
