import React, { useCallback, useState } from 'react'

const CallbackComponent = () => {
     const [count, setCount] = useState(0);

     const increment = () => {
         console.log(" State Component Redering")
        setCount (prev => prev + 1);

     }
    const incrementCallback = useCallback(() => {
         console.log( " useCallback Component Redering")
        setCount (prev => prev + 1);
      }, [])

       console.log("Component Rendring")
  return (
    <>
       <div className='p-2 bg-slate-50 border border-gray-500 m-5 w-95 h-95 flex flex-col justify-center items-center'>
           <p>Count: {count}</p>
      <button onClick={increment} className="bg-green-300 my-4 cursor-pointer px-3 py-2 rounded-md">Regular increment</button>
      <button onClick={incrementCallback} className="bg-green-300 my-4 cursor-pointer px-3 py-2 rounded-md">Memoized  increment</button>
       </div>
    </>
  )
}

export default CallbackComponent