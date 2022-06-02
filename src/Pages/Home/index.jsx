import React, { Fragment, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useRoute } from 'wouter'
import { useDispatch, useSelector } from 'react-redux'

import { useToggle } from '../../hooks/useToggle'
import { auth } from '../../lib/firebase'
import { ArrowDown } from '../../assets/icons/ArrowDown'
import { Plus } from '../../assets/icons/Plus'
import LoadingHome from '../../components/LoadingHome'
import ServerIcon from '../../components/ServerIcon'
import User from '../../components/User'
import Chat from '../../components/chat'
import { fetchUser } from '../../store/slices/user'
import UserChannels from '../../components/Channel/User'
import ServerChannels from '../../components/Channel/Server'

const Home = () => {
  const [user, loading] = useAuthState(auth)
  const [, setLocation] = useLocation()
  const [match] = useRoute('/channels/@me')
  const [matchUser, params] = useRoute('/channels/@me/:id')
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.user)
  const { activeMenu } = useToggle()
  const [mouseHover, setMouseHover] = useState(false)
  const [currentLocation, setCurrentLocation] = useState('')
  // const logout = () => {
  //   signOut(auth)
  //   setLocation('/', { replace: true })
  // }

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      document.body.style.overflowY = 'hidden'
    }
    return () => {
      cleanup = false
    }
  }, [])

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      if (!data._id && user?.displayName) {
        dispatch(fetchUser(user.displayName.split(' ').join('')))
      }
    }
    return () => {
      cleanup = false
    }
  }, [data, dispatch, user?.displayName])

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      if (!loading && user === null) {
        setLocation('/', { replace: true })
      }
    }
    return () => {
      cleanup = false
    }
  }, [loading, setLocation, user])

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
    <Fragment>
      <div className='flex h-screen overflow-hidden relative'>
        <nav className={`scrollbar-hidden flex flex-col flex-shrink-0 space-y-3 items-center bg-discord_nav_server h-full overflow-y-auto overflow-x-hidden z-20 -translate-x-full transition-transform duration-75 w-0 md:translate-x-0 md:py-3 md:min-w-min md:w-[72px] ${activeMenu && 'min-w-[70px] translate-x-0 py-3'}`}>
          <div className='relative flex flex-row w-full'>
            <span className={`absolute left-0 h-5 ${!(match || matchUser) && mouseHover ? 'scale-y-100 top-4' : match || matchUser ? 'scale-y-100 h-10 top-1' : 'scale-y-0 top-4'} transition-transform duration-300 ease-out w-[5px] bg-white rounded-r-2xl`} />
            <button onMouseEnter={() => setMouseHover(true)} onMouseLeave={() => setMouseHover(false)} onClick={navigateToHome} className={`server-default bg-discord_server hover:bg-discord_purple min-h-[48px] w-[48px] mx-auto ${match || matchUser ? 'bg-discord_purple rounded-2xl' : 'server-icon'}`}>
              <img src="https://rb.gy/kuaslg" alt="discordia" className='h-5' />
            </button>
          </div>
          <hr className='border-gray-700 border w-8 mx-auto bg-discord_server' />
          {/* // * Should show all Servers */}
          <ServerIcon image='https://quenoticias.com/wp-content/uploads/2022/03/Marvel.jpg' serverId={'server-1'} />
          <ServerIcon image='https://2.bp.blogspot.com/-WLoRPhB4kRA/XOPN78DUGYI/AAAAAAAADCc/Q0NSJIjCa2AcnLR6KjXwxe0jcNKZojtQACKgBGAs/w4096-h2304-c/daenerys-targaryen-game-of-thrones-season-8-uhdpaper.com-4K-100.jpg' serverId={'server-2'} />
          <div className='h-[48px] w-[48px] server-icon server-default bg-discord_server flex justify-center items-center hover:bg-discord_green text-discord_green hover:text-white'>
            <Plus styleString='w-8 w-8' />
          </div>
        </nav>
        <section className={`h-screen bg-discord_channels_bg w-[220px] sm:w-60 z-10 flex flex-col justify-between absolute transform -translate-x-full md:translate-x-[72px] transition-transform duration-75 ${activeMenu && 'translate-x-[72px]'}`}>
          <header className='py-3 px-4 w-full border-b-2 border-discord_nav_server/80 hover:bg-discord_hover flex flex-row items-center justify-between text-white transition-all cursor-pointer'>
            <h1 className='text-white text-base font-bold'>Discordia</h1>
            <ArrowDown styleString='h-5 w-5' />
          </header>
          <nav className='flex flex-col h-full justify-start overflow-y-auto'>
            {match || matchUser ? <UserChannels /> : <ServerChannels />}
          </nav>
          <User image={data?.photoUrl} username={data.username} id={data._id} />
        </section>
        <Chat />
      </div >
      {loading ? <LoadingHome /> : null}
    </Fragment>
  )
}

export default Home
