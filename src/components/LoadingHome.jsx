import React from 'react'
import { LoadingIcon } from '../assets/icons/Loading'

const LoadingHome = () => {
  return (
    <section className='fixed inset-0 z-30 h-full w-screen grid place-content-center place-items-center bg-discord_channels_bg overflow-hidden select-none'>
      <img className='w-20 h-14 relative' src="https://i1.wp.com/pngkey.com/png/full/20-200938_discord-png.png" alt="" />
      <p className='text-white w-72 text-center pt-4'>Welcome to Discord the clone of Discord, <span className='font-semibold'>developed by Sauterdev</span></p>
      <div className='w-full grid place-content-center place-items-center text-discord_blurple pt-4'>
        <LoadingIcon />
      </div>
    </section>
  )
}

export default LoadingHome