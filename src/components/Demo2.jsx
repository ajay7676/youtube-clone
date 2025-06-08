import { useRef } from "react"

const Demo2 = () => {
//     const myRef = useRef(null);
//     const focusInput = () => {
//      console.log("Foucus btn clicked")
//      myRef.current.focus();
//    } 
 const countRef  = useRef(0);
const increment = () => {
    countRef.current +=  1
    console.log(countRef.current)
    
}
  return (
    <div className='p-2 bg-slate-50 border border-gray-500 m-5 w-95 h-95 flex flex-col justify-center items-center'>
       {/* <input type="text" className="w-full max-w-70 mx-auto border-1 " ref={myRef} />
       <button  onClick={focusInput} className="bg-green-300 my-4 cursor-pointer px-3 py-2 rounded-md"> Foucus Btn</button> */}
      <h1 className="text-lg font-bold text-green-400">{countRef.current}</h1>
    <button onClick={increment} className="bg-green-300 my-4 cursor-pointer px-3 py-2 rounded-md">Click me</button>
    </div>
  )
}

export default Demo2