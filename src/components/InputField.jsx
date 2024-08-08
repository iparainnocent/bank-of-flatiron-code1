import React from 'react'

function InputField({placeholder, type, onChange}) {
  return (
    <div>
      <input className='input'
      onChange={onChange}
      required
      type = {type}
      placeholder={placeholder}

      />
    </div>
  )
}

export default InputField
