import React, { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation } from 'wouter'
import { ArrowDown } from '../../assets/icons/ArrowDown'
import { Plus } from '../../assets/icons/Plus'
import Channel from '../../components/Channel/Channel'
import ServerIcon from '../../components/ServerIcon'
import { auth } from '../../lib/firebase'

const Home = () => {
  const [user] = useAuthState(auth)
  const [, setLocation] = useLocation()

  return (
    <Fragment>
      {!user && setLocation('/', { replace: true })}
      <div className='flex h-screen'>
        <nav className='flex min-w-max flex-col space-y-3 bg-discord_nav_server p-3 h-full overflow-y-auto overflow-x-hidden'>
          <div className='server-icon server-default bg-discord_server hover:bg-discord_purple min-h-[48px]'>
            <img src="https://rb.gy/kuaslg" alt="discordia" className='h-5' />
          </div>
          <hr className='border-gray-700 border w-8 mx-auto bg-discord_server' />
          <ServerIcon image='https://www.cultture.com/pics/2020/12/angus-young-dice-que-love-song-es-la-cancion-de-acdc-que-mas-lamenta.jpg' />
          <ServerIcon image='https://www.cultture.com/pics/2020/12/angus-young-dice-que-love-song-es-la-cancion-de-acdc-que-mas-lamenta.jpg' />
          <ServerIcon image='https://www.cultture.com/pics/2020/12/angus-young-dice-que-love-song-es-la-cancion-de-acdc-que-mas-lamenta.jpg' />
          <div className='h-[48px] w-[48px] server-icon server-default bg-discord_server flex justify-center items-center hover:bg-discord_green text-discord_green hover:text-white'>
            <Plus styleString='w-8 w-8' />
          </div>
        </nav>
        <section className='h-screen bg-discord_channels_bg flex flex-col'>
          <header className='py-3 px-4 w-60 border-b-2 border-discord_nav_server/80 hover:bg-discord_hover flex flex-row items-center justify-between text-white transition-all cursor-pointer'>
            <h1 className='text-white text-base font-bold'>Developers</h1>
            <ArrowDown styleString='h-5 w-5' />
          </header>
          <div className='h-full pr-2 overflow-x-hidden overflow-y-auto'>
            {/* repeat */}
            <div className='flex flex-row items-center text-discord_gray hover:text-white/80'>
              <h2 className='w-full px-1 text-inherit font-semibold text-xs flex flex-row cursor-pointer'>
                <ArrowDown styleString='h-4 w-4 text-inherit mr-1' /> INFORMATION
              </h2>
              <Plus styleString='h-6 w-6 text-inherit mr-2' />
            </div>
            <ul className='pl-2 text-discord_gray'>
              <Channel channelName='general' />
            </ul>
            {/* repeat */}
          </div>
        </section>
      </div>
    </Fragment>
  )
}

export default Home