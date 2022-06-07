import { Fragment, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation, useRoute } from 'wouter'
import { useDispatch, useSelector } from 'react-redux'

import { useToggle } from '../../hooks/useToggle'
import { auth } from '../../lib/firebase'
import LoadingHome from '../../components/LoadingHome'
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
      document.querySelector('html').style.position = 'fixed'
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
      <div className='flex h-full overflow-x-hidden relative'>
        <ServerNav />
        <section
          className={`h-full bg-discord_channels_bg w-[220px] sm:w-60 z-10 flex flex-col justify-between absolute transform -translate-x-full md:translate-x-[72px] transition-transform duration-75 ${activeMenu && 'translate-x-[72px]'}`}
        >
          {/* Channels (user|server) */}
          {match || matchUser ? <UserChannels /> : <ServerChannels />}
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
