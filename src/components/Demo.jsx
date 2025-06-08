import React, { useMemo, useState } from 'react'
import { findPrime } from './utils/helper'
import Demo2 from './Demo2';

const Demo = () => {
    const [text, setText] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false)

    console.log("Rendering ....")

    // const prime = useMemo(() => {
    //   return  findPrime(text);
    // } 
//   const prime = findPrime(text);
    const prime = useMemo(() => {
         return  findPrime(text)
    } , [text])
    


    const handleThemebg = () => {
         setDarkTheme(!darkTheme)
    }   

  return (
    <>
      <div className={'m-5 w-95 h-95 border-1 border-black flex flex-col justify-center items-center ' + (darkTheme && 'bg-gray-900 text-white')}>
        <button onClick={handleThemebg} className='m-5 p-3 cursor-pointer  rounded-md bg-green-400'>Toggle</button>
        <div className='w-75 mb-5'>
            <input type='number' value={text} id='input' onChange={(e) => setText(e.target.value)} className='w-full border ' />
        </div>
        <div className='w-75'>
            <h1>nth Prime : {prime}</h1>
        </div>
    </div>
    <Demo2 />
    </>
  )
}

export default Demo