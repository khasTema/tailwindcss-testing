import React from 'react';

const Card = ({logo, heading, descr}) => {
  return (
    <div className="Card flex flex-col justify-center items-center bg-white border-b-8 border-fuchsia-600 w-full mb:w-1/3 rounded-lg pt-6 pb-10 mb-6 mx-2">
      <div className="Card__pic w-16 h-16 rounded-full bg-gray-300 flex justify-center items-center my-2">
        {logo}
      </div>
      <h4 className='my-2 font-bold text-black text-lg'>{heading}</h4>
      <p className='text-center text-gray-500 px-5'>{descr}</p>
    </div>
  )
}

export default Card;