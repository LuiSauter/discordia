import React, { useState } from 'react'
import { hrefs } from '../../assets/data/hrefs'
import { Discord } from '../../assets/icons/Discord'
import { Exit } from '../../assets/icons/Exit'
import { Menu } from '../../assets/icons/Menu'

const Header = () => {

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
          <a key={index} href={`/${hrf}`} className='link'>{hrf}</a>
        ))}
      </div>
      <div className='flex space-x-4 items-center'>
        <button
          className='bg-white py-2 rounded-full text-sm md:text-sm px-4 focus:outline-none hover:shadow-lg hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium'
          onClick={() => console.log('Click')}
        >
          {auth ? 'Open Discordia' : 'Login'}
        </button>
        <button className='lg:hidden' onClick={handleVisible}><Menu /></button>
      </div>
      {visible && <div onClick={handleVisible} className='lg:hidden bg-[#0000004d] fixed inset-0 transition-all' />}
      <div className={`lg:hidden bg-white fixed rounded-xl top-0 right-0 bottom-0 w-80 ${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-150 ease-in-out pt-6 pr-12 pb-28 pl-6 overflow-auto min-h-screen`}>
        <div className='flex gap-4 flex-col'>
          <a href="/" className='flex gap-[1px] text-[19px] text-black font-extrabold'>
            <Discord />ia
          </a>
          {hrefs.map((hrf, index) => (
            <a key={index} href={`/${hrf}`} className='text-2xl font-semibold p-2 bg-cyan-400'>{hrf}</a>
          ))}
        </div>
      </div>
      <button onClick={handleVisible} className={`fixed top-0 right-0 pr-6 pt-6 text-black ${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-150 ease-in-out`}>
        <Exit />
      </button>
      <div className={`bg-white fixed bottom-0 right-0 w-80 p-6 text-center rounded-xl ${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-150 ease-in-out`}>
        <button className='w-full px-4 py-2 bg-discord_blue_btn text-white rounded-full hover:opacity-70 transition-opacity'>Download for Windows</button>
      </div>
    </header>
  )
}

export default Header