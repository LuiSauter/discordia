import { Fragment, useEffect, useState } from 'react'
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
import Modal from '../../components/Modal'
import ServerNav from '../../components/SeverNav'

const Home = () => {
  const [user, loading] = useAuthState(auth)
  const [, setLocation] = useLocation()
  const [match] = useRoute('/channels/@me')
  const [matchUser] = useRoute('/channels/@me/:id')
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.user)
  const { activeMenu } = useToggle()
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

  return (
    <Fragment>
      <div className='flex h-screen overflow-hidden relative'>
        <ServerNav />
        <section
          className={`h-screen bg-discord_channels_bg w-[220px] sm:w-60 z-10 flex flex-col justify-between absolute transform -translate-x-full md:translate-x-[72px] transition-transform duration-75 ${activeMenu && 'translate-x-[72px]'}`}
        >
          <header className='py-3 px-4 w-full border-b-2 border-discord_nav_server/80 hover:bg-discord_hover flex flex-row items-center justify-between text-white transition-all cursor-pointer'>
            <h1 className='text-white text-base font-bold'>Discordia</h1>
            <ArrowDown styleString='h-5 w-5' />
          </header>
          {/* Channels (user|server) */}
          <nav className='flex flex-col h-full justify-start overflow-y-auto'>
            {match || matchUser ? <UserChannels /> : <ServerChannels />}
          </nav>
          <User image={data?.photoUrl} username={data.username} id={data._id} />
        </section>
        <Chat />
      </div>
      {loading ? <LoadingHome /> : null}
      <Modal />
    </Fragment>
  )
}

export default Home
