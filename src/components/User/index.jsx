import React from 'react'
import { Headset, Mic, Setting } from '../../assets/icons/action'

const User = ({ image = '', username = "", id = '' }) => {
  return (
    <div className='bg-discord_user h-14 px-2 flex flex-row justify-center items-center'>
      <div className='w-8 h-8 mr-2 relative rounded-full flex flex-shrink-0 items-center'>
        <img className='rounded-full' src={image} alt={username} />
      </div>
      <div className='text-[13px] text-white font-semibold flex flex-col w-[90px] overflow-hidden leading-4'>
        <span className='whitespace-nowrap w-full'>{username}</span>
        <span className='font-normal'>#{id}</span>
      </div>
      <div className='flex flex-row text-white'>
        <span title='Desactivar Silencio' className='rounded-md w-8 h-8 grid place-content-center place-items-center hover:bg-discord_hover cursor-pointer relative'>
          <Mic /><div className='w-[3px] h-5 bg-red-700 absolute rotate-45' />
        </span>
        <span title='Ensordecer' className='rounded-md w-8 h-8 grid place-content-center place-items-center hover:bg-discord_hover cursor-pointer'>
          <Headset />
        </span>
        <button title='Ajustes de usuario' className='rounded-md w-8 h-8 grid place-content-center place-items-center hover:bg-discord_hover'>
          <Setting />
        </button>
      </div>
    </div>
  )
}

export default User