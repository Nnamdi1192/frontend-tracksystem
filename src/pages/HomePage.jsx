import React, {useEffect} from 'react'
import PageHeader from '../components/PageHeader'
import PageContainer from '../components/PageContainer'
import Loading from '../components/Loading'
import PrimaryButton from "../components/Buttons/PrimaryButton"
import {IconMenuButton} from "../assets/icons/index"
import StatMain from '../components/stats/StatMain'
import { useDispatch, useSelector} from 'react-redux'
import {fetchTrucks} from '../features/truck/truckSlice'
import { fetchUsers } from '../features/user/userSlice'



const HomePage = () => {
    const dispatch = useDispatch();
    const {isLoading: isLoadingTruck, trucks} = useSelector(state => state.truck)
    const {isLoading: isLoadingUser, users} = useSelector(state => state.user)

    useEffect(() => {
        dispatch(fetchTrucks())
        dispatch(fetchUsers())
    }, [dispatch])

    if(isLoadingTruck || isLoadingUser) return <Loading/>

  return (
    <div>
        <PageContainer>

            <PageHeader/>

            <div className='mt-8'>
                <button><IconMenuButton /></button>
            </div>

            <div className='text-2xl font-semibold text-gray-700'>Home Page</div>

            <div className='bg-sky-100 border-1 border-gray-400 rounded-md p-4 my-8 shadow-sm shadow-gray-400'>
                <h2>Stats</h2>
                <div className='grid grid-cols-3 gap-2'>
                    <StatMain type="truck" value={trucks.length} />
                    <StatMain type="user" value={users.length}/>
                    <StatMain type="transaction" value={4}/>
                </div>   
            </div>  

            <div className='my-2 flex justify-between'>
                <PrimaryButton text={'Create User'} action={() => console.log('clicked')}/>
                <PrimaryButton text={'Create Truck'} action={() => console.log('I have been clicked')}/>
                <PrimaryButton text={'View Transactions'} action={() => console.log('I have been clicked')}/>
            </div>
        </PageContainer>
    </div>
  )
}

export default HomePage