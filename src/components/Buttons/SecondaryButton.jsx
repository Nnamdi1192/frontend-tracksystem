import React from 'react'

const SecondaryButton = ({text, action}) => {
  return (
    <div className='font-semibold text-sm rounded-md  text-gray-800
    cursor-pointer active:scale-[99%]  px-4 py-2 bg-white hover:bg-gray-800 hover:text-white active:bg-blue-900 w-fit  shadow-sm shadow-gray-400' onClick={() => action()}>{text}</div>
  )
}

export default SecondaryButton