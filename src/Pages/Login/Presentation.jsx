import React from 'react'
import { presentation } from '../../assets/data/presentation'

const Presentation = () => {
  return (
    <section className='w-full'>
      {presentation.map((card, index) => (
        <article
          key={index}
          className={`${index % 2 !== 0 && 'bg-[#f6f6f6]'} px-6 py-14 md:px-10 md:py-20 h-full lg:min-h-screen 2xl:min-h-full w-full flex flex-col items-center justify-center`}
        >
          <div className={`${index % 2 !== 0 ? 'lg:grid-cols-[1fr_1.5fr]' : 'lg:grid-cols-[1.5fr_1fr]'} max-w-7xl h-full grid grid-cols-1 md:grid-cols-2 items-center md:gap-4 w-full`}>
            <div className={`${index % 2 !== 0 ? 'md:order-1' : ''} w-full relative mt-6`}>
              {card.svg}
            </div>
            <section className='pt-5 w-full lg:max-w-[380px] mx-auto'>
              <h2 className='text-2xl font-bold leading-7 md:text-5xl w-full'>{card.title}</h2>
              <footer className='pt-6 md:text-base lg:text-xl w-full'>{card.description}</footer>
            </section>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Presentation