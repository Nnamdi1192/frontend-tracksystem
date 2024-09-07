import React from 'react'

const Loading = () => {
  return (
    <div className='w-full h-full flex items-center justify-center absolute z-10'>
        <div className='w-full h-full flex items-center justify-center bg-[rgba(0,0,0,0.5)]'>
            <div className='w-[150px] h-[150px] border-[20px] rounded-full border-l-primary_100 border-r-primary_100 border-t-transparent border-b-transparent animate-spin'></div>
        </div>
    </div>
  )
}

export default Loading