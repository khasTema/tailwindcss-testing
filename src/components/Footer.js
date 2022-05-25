import React from 'react';
import ContWrapper from './ContWrapper';
import Form from './Form';

const Footer = () => {
  return (
    <footer className='bg-gray-800 w-full py-8 border-t-2 border-black text-center'>
      <ContWrapper>
        <Form/>
        <p className='text-xs font-light text-gray-300'>Copyright &copy; 2019 Scrimba</p>
      </ContWrapper>
    </footer>
  )
}

export default Footer;