import React from 'react'

const ContWrapper = (props) => {
  return (
    <div className='Wrapper mx-auto my-0 py-6 px-8 w-full max-w-5xl relative'>
        {props.children}
    </div>
  )
}

export default ContWrapper