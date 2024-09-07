import React from 'react'

const DateInput = ({text, value, onChange}) => {
  return (
    <div className='my-8 flex justify-between items-center'>
        <label htmlFor='dob' className='font-semibold text-md text-gray-800 capitalize'>{text}</label>
        <input className=' focus:bg-white border-2 border-gray-300 outline-none focus:border-sky-300 p-[2px] uppercase rounded-md' type='date' name="dob" id="dob" value={value} onChange={onChange}/>
    </div>
  )
}

export default DateInput