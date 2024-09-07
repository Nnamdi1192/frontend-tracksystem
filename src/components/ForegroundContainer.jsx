import React from 'react'

const ForegroundContainer = ({children}) => {
  return (
    <div className='bg-sky-100 border-1 border-gray-400 rounded-md p-8 my-8 shadow-sm shadow-gray-400'>
        {children}
    </div> 
  )
}

export default ForegroundContainer