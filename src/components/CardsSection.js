import React from 'react';
import Article from './Article';
import Card from './Card';
import ContWrapper from './ContWrapper';
import H2 from './H2';

import { ReactComponent as DEVlogo } from '../images/svgs/developer-icon.svg';
import { ReactComponent as CSSlogo } from '../images/svgs/css-icon.svg'
import { ReactComponent as MOBlogo } from '../images/svgs/mobile-icon.svg'

const CardsSection = () => {
  return (
    <section>
      <ContWrapper>
        <H2>Advantages</H2>
        <Article>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Card
              logo={<CSSlogo className='fill-indigo-600 w-3/4'/>} 
              heading="No Custom CSS"
              descr="Tailwind's advanced class extraction will leave your project free of custom CSS."
            />
            <Card
              logo={<DEVlogo className='fill-indigo-600 w-3/4'/>} 
              heading="Developer Experience"
              descr="Tailwind is designed with your happiness in mind. The ease of performing changes is refreshing."
            />
            <Card
              logo={<MOBlogo className='fill-indigo-600 w-3/4'/>} 
              heading="Mobile Friendly"
              descr="Modern applications demand mobile-friendly & Tailwind's responsive modifiers make it easy."
            />
          </div>
        </Article>
      </ContWrapper>
    </section>
  )
}

export default CardsSection;