import React from 'react';

const H2 = (props) => {
  return (
    <h2 className='text-2xl font-bold text-indigo-600 mb-5'>{props.children}</h2>
  )
}

export default H2;