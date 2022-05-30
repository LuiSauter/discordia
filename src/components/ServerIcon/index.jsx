import React, { useState } from 'react'
import { useLocation } from 'wouter'
import { useRoute } from 'wouter'

const ServerIcon = ({ image = '', serverId = '' }) => {
  const [match, params] = useRoute('/channels/:serverId/:id')
  const [location, setLocation] = useLocation()
  const [mouseHover, setMouseHover] = useState(false)


  const { serverId: serverIdParams } = params || { serverId: '' }

  return (
    <div className='relative flex flex-row w-full'>
      <span className={`absolute left-0 h-5 ${serverIdParams !== serverId && mouseHover ? 'scale-y-100 top-4' : serverIdParams === serverId ? 'scale-y-100 h-10 top-1' : 'scale-y-0 top-4'} transition-transform duration-300 ease-out w-[5px] bg-white rounded-r-2xl`} />

      <button onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)} onClick={() => setLocation(`/channels/${serverId}/asss123`)} className={`server-default min-h-[48px] w-[48px] mx-auto ${serverIdParams === serverId ? 'rounded-2xl' : 'server-icon'} overflow-hidden`}>
        <img
          src={image}
          alt="server discordia"
          className='server-default w-12 object-cover'
        />
      </button>
    </div>
  )
}

export default ServerIcon