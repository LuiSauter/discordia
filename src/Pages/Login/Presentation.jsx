import React from 'react'
import { presentation } from '../../assets/data/presentation'
import { Fourth } from '../../assets/icons/presentation/Fourth'

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
      <article
        className={` px-6 py-14 md:px-10 md:py-20 h-full lg:min-h-screen 2xl:min-h-full w-full flex flex-col items-center justify-center`}
      >
        <div className='max-w-7xl h-full flex flex-col items-center md:gap-4 w-full'>
          <section className='w-full mx-auto xl:px-28'>
            <h2 id='title' className='text-xl sm:text-3xl md:text-[40px] w-full opacity-[0.85] leading-5 md:text-center lg:px-16'>TECNOLOGÍA CONFIABLE PARA ESTAR CERCA</h2>
            <footer className='pt-6 md:text-base lg:text-xl w-full md:text-center'>La voz y el video de baja latencia se sienten como si estuvieras en la misma habitación. Salude a través del video, vea a sus amigos transmitir sus juegos o reúnase y tenga una sesión de dibujo con pantalla compartida.</footer>
          </section>
          <div className={`w-full relative mt-6`}>
            <Fourth />
          </div>
        </div>
      </article>
      <article>
        <h2>¿Listo para comenzar tu viaje?</h2>
      </article>
    </section>
  )
}

export default Presentation