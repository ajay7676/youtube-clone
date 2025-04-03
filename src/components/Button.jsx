import React from 'react'

const Button = ({name}) => {
  return (
    <>
        <button className=" cursor-pointer px-5 py-2 m-2 bg-gray-200 rounded-lg">{name}</button>
    </>
  )
}

export default Button