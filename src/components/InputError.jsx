import React, { useContext } from 'react'
import { VscErrorSmall } from "react-icons/vsc";
import { MdError } from "react-icons/md";
import UiContext from '../context/UiContext/UiContext';

const InputError = () => {
    const {displayError, hideError, error} = useContext(UiContext)
    
  return (
    <div className={`absolute top-10 inset-x-5 p-5 border-2 bg-sky-400 rounded-md z-10 ${displayError && 'hidden'}`}>
        <div>
            <div className='absolute top-0 right-0 text-gray-600 hover:scale-105 active:scale-100' onClick={() => hideError()} ><VscErrorSmall size={30}/></div>
            <div className='flex flex-col justify-center'>
              <div className='flex items-center justify-center gap-10'>
                <span><MdError size={50} color={'white'}/></span>
                <h2 className='font-bold text-2xl text-gray-800'>Validation Error!</h2>
              </div>
              
              <ul className='flex flex-col justify-center w-full mt-8'>
                {error.map(errItem => (
                  <li key={errItem} className='capitalize mb font-semibold flex justify-center text-gray-700'>{errItem}</li>
                ))}
              </ul>
            </div>

        </div>
    </div>
  )
}

export default InputError