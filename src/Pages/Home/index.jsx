import React, { Fragment } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation } from 'wouter'
import ServerIcon from '../../components/ServerIcon'
import { auth } from '../../lib/firebase'

const Home = () => {
  const [user] = useAuthState(auth)
  const [, setLocation] = useLocation()
  return (
    <>
      {!user && setLocation('/', { replace: true })}
      {/* <div className='flex h-screen bg-[#222]'>
        <nav>
          <div>
            <img src="https://rb.gy/kuaslg" alt="discordia" className='h-5' />
          </div>
          <hr className='border-gray-700 border w-8 mx-auto bg-gray-700' />
          <ServerIcon image='https://rb.gy/qidcpp' />
        </nav>
      </div> */}
    </>
  )
}

export default Home