import React from 'react'

const Comments = ({data}) => {
  const{name , text, replies}= data;
  return (
    <div className="flex shadow my-2 bg-[#eaeaea] p-2 ">
      <img
        className="w-12 h-12"
        alt="User"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <h5 className="font-bold">{name}</h5>
        <p className="">{text}</p>
      </div>
    </div>
  )
}

export default Comments