import React, { Fragment, useEffect } from 'react'
import { useLocation } from 'wouter'
import { Link } from 'wouter'
import { hrefs } from '../../../assets/data/hrefs'
import { Discord } from '../../../assets/icons/Discord'
import { Exit } from '../../../assets/icons/Exit'

const HeaderModal = ({ visible, handleVisible }) => {
  const [location] = useLocation()
  const transitionModal = `${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out`

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      document.body.style.overflowY = visible ? 'hidden' : 'scroll'
    }
    return () => {
      cleanup = false
    }
  }, [visible])

  return (
    <Fragment>
      {visible && <div onClick={handleVisible} className='lg:hidden bg-[#0000004d] fixed inset-0 transition-all z-10' />}
      <div
        className={`lg:hidden bg-white fixed rounded-l-2xl top-0 right-0 bottom-0 w-80 ${transitionModal} pt-6 pr-12 pb-28 pl-6 overflow-auto min-h-screen z-20`}
      >
        <div className='flex gap-4 flex-col'>
          <Link href="/" className='flex gap-[1px] text-[19px] text-black font-extrabold'>
            <Discord />ia
          </Link>
          <Link href='/' className={`${location === '/' && 'bg-slate-200/80'} text-base bg-slate-200/80 py-2 px-4 rounded-lg font-semibold`}>home</Link>
          {hrefs.map((hrf, index) => (
            <span key={index} className='text-base py-2 px-4 rounded-lg font-semibold hover:underline cursor-pointer' title={hrf}>{hrf}</span>
            // <Link key={index} href={`/${hrf.toLowerCase()}`} className='text-base py-2 px-4 rounded-lg font-semibold hover:underline'>{hrf}</Link>
          ))}
        </div>
      </div>
      <button
        onClick={handleVisible}
        className={`lg:hidden fixed top-0 right-0 pr-6 pt-6 text-black z-20 ${transitionModal}`}
      >
        <Exit />
      </button>
      <div className={`lg:hidden bg-white fixed bottom-0 right-0 w-80 p-6 text-center rounded-l-2xl z-20 ${transitionModal}`}>
        <button
          className='w-full px-4 py-2 bg-discord_blue_btn text-white rounded-full hover:opacity-70 transition-opacity'
        >
          Download for Windows
        </button>
      </div>
    </Fragment>
  )
}

export default HeaderModal