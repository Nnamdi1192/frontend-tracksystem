import React from 'react'

const PageHeader = () => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='font-semibold text-2xl text-gray-700'>Track Systems</h1>
      <div id="userProfile" className='flex items-center gap-[7px]'>
            <div className='w-10 h-10 bg-primary_100 rounded-full bg-blue-500'></div>
            <p className='text-sm'>
                <span id="greeting" className='mr-4'>Hi</span>
                <span id="name" className='text-[16px] font-medium  text-primary_200 w-fit capitalize'>{'user'}</span>
            </p>
      </div>
    </div>
  )
}

export default PageHeader