import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ArrowDown } from '../../../assets/icons/ArrowDown'
import { LoadingIcon } from '../../../assets/icons/Loading'
import { Plus } from '../../../assets/icons/Plus'
import Channel from '../Channel'

const UserChannels = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const { user } = useSelector(state => state)
  const handleOver = () => setMouseOver(!mouseOver)

  return (
    <nav className='flex flex-col h-full justify-start overflow-y-auto'>
      <header className='py-3 px-4 w-full border-b-2 border-discord_nav_server/80 hover:bg-discord_hover flex flex-row items-center justify-between text-white transition-all cursor-pointer'>
        <h1 className='text-white text-base font-bold'>Discordia</h1>
        <ArrowDown styleString='h-5 w-5' />
      </header>
      <div
        onMouseEnter={handleOver}
        onMouseLeave={handleOver}
        className={`${mouseOver ? 'scrollbar-visible' : 'scrollbar-visible-over'} h-full py-2 pr-2 overflow-x-hidden overflow-y-auto`}
      >
        <div className='flex flex-row items-center text-discord_gray hover:text-white/80'>
          <h2 className='w-full pr-1 pl-4 text-inherit font-semibold text-xs flex flex-row cursor-pointer'>
            MENSAJES DIRECTOS
          </h2>
          <Plus styleString='h-5 w-5 text-inherit mr-2' />
        </div>
        <ul className='pl-2 pt-2 text-discord_gray h-max '>
          {user.data?._id ? (
            user.data?.channels.map(channel => {
              const owner = channel.owner.find(yourUser => yourUser._id !== user.data?._id)
              const { username, photoUrl } = owner
              return <Channel key={channel._id} id={channel._id} photoUrl={photoUrl} name={username} />
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
