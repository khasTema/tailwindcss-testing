import React from 'react';
import ContWrapper from './ContWrapper';
import { ReactComponent as Logo } from '../images/svgs/scrimba-logo.svg';
import { ReactComponent as Burger } from '../images/svgs/hamburger.svg';
import tailwindLogo from '../images/tailwind-logo.png'

const Header = () => {
  return (
    <header className='bg-indigo-700 w-full border-b-4 border-fuchsia-600 pb-10 mb-20'>
      <ContWrapper>
        <nav className='flex justify-between items-center w-full mb-6'>
         <div className="logo w-32 cursor-pointer">
          <Logo className="fill-fuchsia-600 hover:fill-fuchsia-500"/>
         </div>
         <div className="burger_menu w-8 cursor-pointer sm:hidden">
          <Burger className="fill-white"/>
         </div>
        </nav>
        <h1 className='font-bold text-gray-200 text-3xl mb-2'>Want to learn Tailwind CSS?</h1>
        <p className='mb-8 text-blue-100 font-medium'>Tailwind is the fastest growing utility-first CSS framework. Let's learn it step by step.</p>
        <button className="CTA uppercase bg-fuchsia-600 hover:bg-fuchsia-500 text-gray-100 font-bold px-5 py-3 rounded-full text-sm">Enroll now</button>
        <div 
          className="tailwind__logo bg-white w-32 h-32 flex justify-center items-center rounded-full border-4 border-fuchsia-600 absolute right-12 cursor-pointer hover:bg-slate-200">
          <img src={tailwindLogo} alt="logo tail" className='w-2/3'/>
        </div>
      </ContWrapper>
    </header>
  )
}

export default Header;