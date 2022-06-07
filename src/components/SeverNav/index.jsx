import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRoute, useLocation } from 'wouter'
import { serverImages } from '../../assets/data/serverImages'
import { Plus } from '../../assets/icons/Plus'
import { useToggle } from '../../hooks/useToggle'
import ServerIcon from '../ServerIcon'

const ServerNav = () => {
  const [, setLocation] = useLocation()
  const { activeMenu, toggleModal } = useToggle()
  const [mouseHover, setMouseHover] = useState(false)
  const [currentLocation, setCurrentLocation] = useState('')
  const [matchUser, params] = useRoute('/channels/@me/:id')
  const [match] = useRoute('/channels/@me')
  const { data } = useSelector(state => state.user)

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      if (params !== null) {
        setCurrentLocation(params.id)
      }
    }
    return () => {
      cleanup = false
    }
  }, [params])

  const navigateToHome = () => {
    setLocation(`/channels/${currentLocation === '' ? '@me' : '@me/' + currentLocation}`, { replace: true })
  }
  return (
    <nav
      className={`scrollbar-hidden flex flex-col flex-shrink-0 space-y-3 items-center bg-discord_nav_server h-full overflow-y-auto overflow-x-hidden z-20 -translate-x-full transition-transform duration-75 w-0 md:translate-x-0 md:py-3 md:min-w-min md:w-[72px] ${activeMenu && 'min-w-[70px] translate-x-0 py-3'}`}
    >
      <div className='relative flex flex-row w-full'>
        <span
          className={`absolute left-0 h-5 ${!(match || matchUser) && mouseHover
            ? 'scale-y-100 top-4' : match || matchUser ? 'scale-y-100 h-10 top-1' : 'scale-y-0 top-4'} transition-transform duration-300 ease-out w-[5px] bg-white rounded-r-2xl`}
        />
        <button
          onMouseEnter={() => setMouseHover(true)}
          onMouseLeave={() => setMouseHover(false)}
          onClick={navigateToHome}
          className={`server-default bg-discord_server hover:bg-discord_purple min-h-[48px] w-[48px] mx-auto ${match || matchUser ? 'bg-discord_purple rounded-2xl' : 'server-icon'}`}
        >
          <img src='https://rb.gy/kuaslg' alt='discordia' className='h-5' />
        </button>
      </div>
      <hr className='border-gray-700 border w-8 mx-auto bg-discord_server' />
      <ul className='flex flex-col gap-3 w-full'>
        {data.servers && data.servers.map(server => (
          <li key={server._id} className='relative flex flex-row w-full'>
            <ServerIcon
              image={serverImages[server.image]}
              serverId={server._id}
              channelId={server.channels[1]._id}
            />
          </li>
        ))}
        <button onClick={toggleModal} className='h-[48px] w-[48px] mx-auto server-icon server-default bg-discord_server flex justify-center items-center hover:bg-discord_green text-discord_green hover:text-white'>
          <Plus styleString='w-8 w-8' />
        </button>
      </ul>
    </nav>
  )
}

export default ServerNav