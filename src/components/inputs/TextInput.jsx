import React from 'react'

const TextInput = ({text, value, onChange}) => {
  return (
    <div className='frmGroup flex flex-col'>
        <label htmlFor={text} className='font-semibold capitalize'>{text}</label>
        <input type='text' id={text} name={text} value={value} placeholder={text} onChange={onChange} className='w-full outline-none border-2
         border-gray-300 text-gray-800 rounded px-2 py-2 mb-2 focus:border-sky-300  font-semibold capitalize' required />
    </div>
  )
}

export default TextInput