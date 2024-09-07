import React from 'react'

const SelectInput = ({text, options, value, onChange}) => {
  return (
    <div className='flex gap-4 items-center'>
        <label htmlFor={text} className='capitalize font-semibold text-gray-800'>{text}</label>
        <select name={text} value={value} onChange={onChange} className='outline-none border-2 rounded-md p-[4px] focus:border-sky-300'>
            <option value="" className='Capitalize'>{`--Select ${text} --`}</option>
            {options.map(item => ( <option key={item.value} value={item.value}>{item.index}</option>))}
        </select>
    </div>
  )
}

export default SelectInput