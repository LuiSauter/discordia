import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useLocation } from 'wouter'
import { auth, signInWithPopup, provider } from '../../../lib/firebase'
import { loginWithGoogle } from '../../../services'

const ButtonLogin = () => {
  const [user] = useAuthState(auth)
  const [, setLocation] = useLocation()

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        loginWithGoogle({
          username: data.user.displayName.split(' ').join(''),
          email: data.user.email,
          photoUrl: data.user.photoURL
        })
        setLocation('/channels')
      })
      .catch(error => alert(error.message))
  }

  return (
    <button
      className='bg-white py-2 rounded-full text-sm md:text-sm px-4 focus:outline-none hover:shadow-lg hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap'
      onClick={() => {
        user ? setLocation('/channels') : signIn()
      }}
    >
      {user ? 'Open Discordia' : 'Login'}
    </button>
  )
}

export default ButtonLogin