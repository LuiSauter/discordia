import { useState } from 'react'
import { useLocation, useRoute } from 'wouter'
import avatar from '../../assets/images/avatar-default.svg'

const ServerIcon = ({ image = '', serverId = '', channelId = '' }) => {
  const [, params] = useRoute('/channels/:serverId/:id') // [match, params]
  const [, setLocation] = useLocation()
  const [mouseHover, setMouseHover] = useState(false)

  const { serverId: serverIdParams } = params || { serverId: '' }

  const handleImgError = ({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src = avatar
  }

  return (
    <>
      <span className={`absolute left-0 h-5 ${serverIdParams !== serverId && mouseHover ? 'scale-y-100 top-4' : serverIdParams === serverId ? 'scale-y-100 h-10 top-1' : 'scale-y-0 top-4'} transition-transform duration-300 ease-out w-[5px] bg-white rounded-r-2xl`} />
      <button onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)} onClick={() => setLocation(`/channels/${serverId}/${channelId}`)} className={`server-default min-h-[48px] w-[48px] mx-auto ${serverIdParams === serverId ? 'rounded-2xl' : 'server-icon'} overflow-hidden`}>
        <img
          src={image}
          onError={handleImgError}
          alt="server discordia"
          className='server-default w-12 object-cover'
        />
      </button>
    </>
  )
}

export default ServerIcon