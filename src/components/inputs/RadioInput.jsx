import React, {useState} from 'react'

const RadioInput = ({text, options, onChange, selected=''}) => {

    const [choosen, setChoosen] = useState('');


  return (
    <div className='flex justify-between items-center mt-4'>
        <label htmlFor={text} className='font-semibold text-gray-800 text-md capitalize'>{text}</label>

        <div className='flex' onClick={(e) => onChange({
            target: {
                type: 'radio',
                name: text,
                value: e.target.dataset.value
            }
        })}>
            {options.map(item => (<div key={item} className={`${choosen === item ? 'border-gray-100 bg-blue-600 text-white' : 'border-gray-400 bg-white text-gray-500'} border-2 px-4 py-1 rounded-md mx-1 cursor-pointer capitalize`} data-value={item} onClick={() => setChoosen(item)}>{item}</div>))}
        </div>
    </div>
  )
}

export default RadioInput