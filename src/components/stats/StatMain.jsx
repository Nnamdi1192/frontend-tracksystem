import React from 'react'
import {IconUser, IconTruck, IconTransaction} from '../../assets/icons'

const StatMain = ({value, type='truck'}) => {

    const stats = {
        truck : {
            icon: <IconTruck/>,
            name: 'Truck'
        },

        transaction : {
            icon: <IconTransaction/>,
            name: 'Transaction'
        },

        user : {
            icon: <IconUser/>,
            name: 'User'
        },
    }

  return (
    <div className='py-2 px-3 border-2 flex-col bg-white rounded-lg border-border_light text-text_main hover:cursor-pointer active:scale-[99%] active:bg-primary_250 active:text-white'>
        <div className='flex items-center gap-1'>
            {stats[type].icon}
            <h3 className='leading-none font-bold  text-[12px] capitalize'>{stats[type].name}</h3>
        </div>
        
        <h3 className='leading-none text-3xl font-bold mt-1 text-center flex-[1]'>{value}</h3>
    </div>
  )
}

export default StatMain