import React, { useState } from 'react'
import { hrefs } from '../../assets/data/hrefs'
import { Discord } from '../../assets/icons/Discord'
import { Menu } from '../../assets/icons/Menu'
import HeaderModal from './HeaderModal'
import Togglable from '../Togglable/Togglable'

const Header = ({ signIn }) => {

  // const [user] = useAuthState()
  // const history = useHistory()
  const [visible, setVisible] = useState(false)

  // const signIn = (e) => {
  //   e.preventDefault()
  //   auth
  //     .signInWithPopup(provider)
  //     .then(() => history.push('/chanels'))

  // }

  const auth = false
  const handleVisible = () => setVisible(!visible)

  return (
    <header className='bg-discord_blue flex items-center justify-between py-5 px-6 transition-all'>
      <a href="/" className='flex gap-[1px] text-[19px] text-white font-extrabold'>
        <Discord />ia
      </a>
      <div className='hidden lg:flex space-x-6 text-white'>
        {hrefs.map((hrf, index) => (
          <a key={index} href={`/${hrf.toLowerCase()}`} className='link'>{hrf}</a>
        ))}
      </div>
      <div className='flex space-x-4 items-center'>
        <button
          className='bg-white py-2 rounded-full text-sm md:text-sm px-4 focus:outline-none hover:shadow-lg hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium'
          onClick={signIn}
        >
          {auth ? 'Open Discordia' : 'Login'}
        </button>
        <Togglable onClick={handleVisible} stringStyle='lg:hidden'>
          <Menu />
        </Togglable>
      </div>
      <HeaderModal visible={visible} handleVisible={handleVisible} />
    </header>
  )
}

export default Header