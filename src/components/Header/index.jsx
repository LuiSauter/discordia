import React, { useState } from 'react'
import { Link } from 'wouter'

import { hrefs } from '../../assets/data/hrefs'
import { Discord } from '../../assets/icons/Discord'
import { Menu } from '../../assets/icons/Menu'
import HeaderModal from './HeaderModal'
import Togglable from '../Togglable/Togglable'
import ButtonLogin from './ButtonLogin'

const Header = () => {
  const [visible, setVisible] = useState(false)

  const handleVisible = () => setVisible(!visible)

  return (
    <nav className='bg-discord_blue'>
      <header className='px-6 py-6 flex items-center justify-between transition-all max-w-7xl mx-auto'>
        <Link title='Discord clone' href="/" className='flex gap-[1px] text-[20px] text-white font-extrabold'>
          <Discord />ia
        </Link>
        <div className='hidden lg:flex space-x-6 text-white'>
          {hrefs.map((hrf, index) => (
            <Link key={index} href={`/${hrf.toLowerCase()}`} className='link'>{hrf}</Link>
          ))}
        </div>
        <div className='flex space-x-4 items-center'>
          <ButtonLogin />
          <Togglable onClick={handleVisible} stringStyle='lg:hidden'>
            <Menu />
          </Togglable>
        </div>
      </header>
      <HeaderModal visible={visible} handleVisible={handleVisible} />
    </nav>
  )
}

export default Header