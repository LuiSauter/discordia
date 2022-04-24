import React from 'react'
import { Download } from '../../assets/icons/Download'
import { HeroOne } from '../../assets/icons/HeroOne'
import { HeroThree } from '../../assets/icons/HeroThree'
import { HeroTwo } from '../../assets/icons/HeroTwo'

const Hero = () => {
  return (
    <div className='bg-discord_blue md:pb-0 relative overflow-hidden'>
      <div className=' h-full md:flex relative flex flex-col justify-between max-w-7xl mx-auto'>
        <div className='flex flex-col px-6 md:pl-10 lg:pr-10 py-14  md:max-w-xl lg:max-w-none lg:justify-center lg:py-[120px] lg:items-center w-full z-[1]'>
          <h1 id='title' className='text-2xl sm:text-4xl md:text-6xl text-white lg:max-w-2xl lg:text-center'>IMAGINE A PLACE...</h1>
          <h2 className='text-white text-md mt-6 md:mt-10 md:text-xl font-light tracking-wide lg:max-w-2xl lg:text-center w-full'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
          <div className='flex flex-row flex-wrap md:items-start sm:items-center gap-6 sm:gap-4 md:gap-6 mt-6'>
            <button className='bg-white text-black w-max font-medium flex items-center justify-center rounded-full py-4 px-8 text-lg sm:text-lg hover:shadow-xl hover:text-discord_blurple transition duration-200 ease-in-out focus:outline-none'>
              <Download />
              Download for Linux
            </button>
            <button className='bg-gray-800 text-white w-max font-medium flex items-center justify-center rounded-full py-4 px-8 text-lg sm:text-lg sm:whitespace-nowrap hover:bg-gray-800 focus:outline-none hover:shadow-xl hover:text-discord_blurple transition duration-200 ease-in-out overflow-hidden'>Open Discordia in your browser</button>
          </div>
        </div>
        <div className='flex h-max justify-center items-end relative md:absolute md:top-0 md:left-0 md:h-full md:w-full'>
          <div className='hidden absolute md:block left-[60%] -ml-[1320px] h-min w-full text-center'>
            <HeroTwo />
          </div>
          <div className='w-full lg:absolute md:hidden max-w-[880px] lg:block lg:left-[2%] lg:-ml-[450px]  -translate-x-14'>
            <HeroOne />
          </div>
          <div className='hidden absolute md:block bottom-0 -right-[45%] -mr-[70px] lg:-right-[75%]  w-full'>
            <HeroThree />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero