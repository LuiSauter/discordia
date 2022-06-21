import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useRoute } from 'wouter'
import { ArrowDown } from '../../../assets/icons/ArrowDown'
import { LoadingIcon } from '../../../assets/icons/Loading'
import { Plus } from '../../../assets/icons/Plus'
import Channel from '../Channel'

const UserChannels = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const [, setLocation] = useLocation()
  const { user } = useSelector(state => state)
  const handleOver = () => setMouseOver(!mouseOver)
  const [match, paramsUser] = useRoute('/channels/@me/:id')

  return (
    <nav className='flex flex-col h-full justify-start overflow-y-auto'>
      <header className='py-3 px-4 w-full border-b-2 border-discord_nav_server/80 hover:bg-discord_hover flex flex-row items-center justify-between text-discord_gray transition-all cursor-pointer'>
        <h1 className='text-white text-base font-bold'>Discordia</h1>
        <ArrowDown styleString='h-5 w-5' />
      </header>
      <div
        onMouseEnter={handleOver}
        onMouseLeave={handleOver}
        className={`${mouseOver ? 'scrollbar-visible' : 'scrollbar-visible-over'} h-full py-2 pr-2 overflow-x-hidden overflow-y-auto`}
      >
        <div className='w-full pl-2 mb-2 text-white'>
          <button
            onClick={() => setLocation('/channels/@me', { replace: true })}
            className={`flex w-full py-2 px-3 cursor-pointer rounded-md hover:text-white/80 transition-all duration-100 ${!paramsUser?.id ? 'bg-discord_channel_hover' : 'hover:bg-discord_channel_hover/80'}`}
          >Inicio</button>
        </div>
        <div className='flex flex-row items-center text-discord_gray hover:text-white/80'>
          <h2 className='w-full pr-1 pl-4 text-inherit font-semibold text-xs flex flex-row cursor-pointer'>
            MENSAJES DIRECTOS
          </h2>
          <Plus styleString='h-5 w-5 text-inherit mr-2' />
        </div>
        <ul className='pl-2 pt-2 text-discord_gray h-max'>
          {user.data?._id ? (
            user.data?.channels.map(channel => {
              const owner = channel.owner.find(yourUser => yourUser._id !== user.data?._id)
              const { username, photoUrl } = owner
              return (
                <Channel
                  key={channel._id}
                  id={channel._id}
                  photoUrl={photoUrl}
                  name={username}
                  isActive={match && channel._id === paramsUser.id}
                />
              )
            })
          ) : (
            <div className='grid place-content-center place-items-center h-full py-4 w-full'>
              <LoadingIcon />
            </div>
          )}
        </ul>
      </div>
    </nav>
  )
}

export default UserChannels
