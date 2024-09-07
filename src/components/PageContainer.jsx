import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='bg-white pt-[48px] px-8 w-[500px] border mx-auto relative overflow-hidden'>{children}</div>
  )
}

export default PageContainer