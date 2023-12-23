import React from 'react'
import { Form, InputGroup } from 'react-bootstrap'
//this interface is used in src/components/inputText/inputText.tsx
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
        <InputGroup className='mb-3' style={{ width: '50%' }}>
          <Form.Control
            type='text'
            placeholder={placeholder}
            aria-label={name}
            aria-describedby='basic-addon1'
            name={name}
            value={value}
            onChange={onChange}
            style={{ width: '70%' }}
          />
        </InputGroup>
      </td>
    </tr>
  )
}
export default InputText
