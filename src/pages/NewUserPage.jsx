import React, {useContext, useState, useEffect} from 'react'
import {PageContainer, PageHeader, ForegroundContainer, InputError} from '../components'
import { TextInput, RadioInput, DateInput, SelectInput } from '../components/inputs'
import {PrimaryButton, SecondaryButton} from "../components/Buttons"
import {IconMenuButton} from "../assets/icons";
import {selStates, selLga} from '../utilities/dataList'
import {validate} from "../utilities/commonFunctions"
import UiContext from '../context/UiContext/UiContext';


const NewUserPage = () => {

    const initData = {
        firstName: '',
        lastName: '',
        otherName: '',
        phoneNumber: '',
        gender: '',
        dob: '',
        state: '',
        lga: '',
        userName: '',
        password: '',
    }
    const {showError, writeError} = useContext(UiContext)
    // eslint-disable-next-line
    const [displayFirst, setDisplayFirst] = useState(true);
    const [userData, setUserData] = useState({...initData});

    const [userErr, setUserErr] = useState({
        firstName: {
            name: 'firstname',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        lastName: {
            name: 'lastname',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        otherName: {
            name: 'othername',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        phoneNumber: {
            name: 'phonenumber',
            requirement: [validate.isEmpty, validate.isNumber],
            message: '',
            exclude: false
        },
        gender: {
            name: 'gender',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        dob: {
            name: 'date of birth',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        state: {
            name: 'state',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        lga: {
            name: 'LGA',
            requirement: [validate.isEmpty],
            message: '',
            exclude: false
        },
        userName: {
            name: 'username',
            requirement: [validate.isEmpty],
            message: '',
            exclude: true
        },
        password: {
            name: 'password',
            requirement: [validate.isEmpty],
            message: '',
            exclude: true
        },
      
    });

    
    // eslint-disable-next-line
    const {firstName, lastName, otherName, phoneNumber, gender, dob, state, lga, userName, password} = userData;

    const onChange = (e) => {
        
        setUserData({...userData, [e.target.name]:e.target.value})
    }

    const validateData = (uData, uError, exclude = false) => {
        const tempError = {...uError};
        // For each data item
        Object.entries(uData).forEach(([key, data]) => {
            // For each item create error collector
            let errCollector = [];
            uError[key].requirement.forEach(validate => {

                if(exclude){
                    if (validate.validator(data) && !uError[key].exclude)  {
                        // create message
                        if(errCollector.length !== 0) return;
                        errCollector.push(validate.message(userErr[key].name))
                    } else {
                        errCollector.push('')    
                    }
                } else {
                    if (validate.validator(data))  {
                        // create message
                        if(errCollector.length !== 0) return;
                        errCollector.push(validate.message(userErr[key].name))
                    } else {
                        errCollector.push('')    
                    }
                }
            })
            tempError[key].message = errCollector[0];
            
        })
        setUserErr(tempError)
    }

    const getErrors = () => {
        let errorCollection = Object.values(userErr)
        if(errorCollection.every(item =>  item.message === '')){
            return [];
          }else{
            console.log('all is not valid');
            // write error
            let errorMessages = errorCollection.filter(item => item.message !== '').map(item => item.message);
            return(errorMessages);
          }
    }

    const handleNext = () => {
        // check firstname
       validateData( userData, userErr, true);
       
       const errorCol = getErrors();
       if(errorCol.length !== 0){
            writeError(errorCol)
            showError();
       }else{
            setDisplayFirst(false);
       }
    }

    const clearUserCred = () => {
        const tempData = {...userData};

        tempData.password = '';
        tempData.userName = '';

        setUserData({...tempData});
        setDisplayFirst(true);
    }

    const resetUserData = () => {
        setUserData({...initData})
    }

    const handleCreateUser = () => {
        validateData( userData, userErr);
       
       const errorCol = getErrors();
       if(errorCol.length !== 0){
            writeError(errorCol)
            showError();
       }else{
            console.log('good to go')
       }     
    }

  return (
    <div>
        <PageContainer>

            <PageHeader/>

            <div className='mt-8'>
                <button><IconMenuButton /></button>
            </div>

            <div className='text-2xl mt-8 font-semibold text-gray-700'>New User</div>

            <ForegroundContainer>
                <h2 className='font-semibold text-gray-700 text-lg my-4'>Personal Details</h2>

                <form className={`${!displayFirst && "hidden"}`}>
                    <TextInput text={'firstName'} value={firstName} onChange={onChange}/>
                    <TextInput text={'lastName'} value={lastName} onChange={onChange}/>
                    <TextInput text={'otherName'} value={otherName} onChange={onChange}/>
                    <TextInput text={'phoneNumber'} value={phoneNumber} onChange={onChange}/>
                    <RadioInput text={'gender'} value={gender} options={['male', 'female']} onChange={onChange}/>
                    <DateInput text={'Date of Birth'} value={dob} onChange={onChange}/>
                    
                    <div className='flex gap-4 items-center my-8'>
                        <SelectInput text={'state'} value={state} onChange={onChange} options={selStates}/> 
                        <SelectInput text={'lga'} value={lga} onChange={onChange} options={selLga}/>
                    </div>
                    <div className='flex gap-16 justify-center mt-16'>
                        <SecondaryButton text={'Cancel'} action={resetUserData}/>
                        <PrimaryButton text={'Next'} action={handleNext}/>
                    </div>
                </form>

                <form className={`mt-2 ${displayFirst && "hidden" }`}>
                    <TextInput text={'userName'} value={userName} onChange={onChange}/>
                    <TextInput text={'password'} value={password} onChange={onChange}/>
                   
                    
                    <div className='flex gap-16 justify-center mt-8'>
                        <SecondaryButton text={'Cancel'} action={clearUserCred}/>
                        <PrimaryButton text={'Create User'} action={handleCreateUser}/>
                    </div>
                </form>
               <InputError show={displayFirst}/>
            </ForegroundContainer>
        </PageContainer>
    </div>
  )
}

export default NewUserPage