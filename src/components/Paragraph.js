import React from 'react';
import Article from './Article';
import ContWrapper from './ContWrapper';
import H2 from './H2';

const Paragraph = () => {
  return (
    <article>
      <ContWrapper>
        <H2>How It Works</H2>
        <Article>
          <p className='text-gray-500'>Tailwind is designed for rapid development of modern applications. At its core, it is a robust mobile-first design system built with developer experience in mind. After using Tailwind CSS, you will find it difficult to go back to use anything else. Learn all about it in this all-inclusive course.</p>
        </Article>
      </ContWrapper>
    </article>
  )
}

export default Paragraph;