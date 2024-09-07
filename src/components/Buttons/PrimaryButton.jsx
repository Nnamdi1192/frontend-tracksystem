import React from 'react'

const PrimaryButton = ({text, action}) => {
  return (
    <div className='text-white font-semibold text-sm rounded-md 
    cursor-pointer active:scale-[99%]  px-4 py-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 w-fit  shadow-sm shadow-gray-400' onClick={() => action()}>{text}</div>
  )
}

export default PrimaryButton