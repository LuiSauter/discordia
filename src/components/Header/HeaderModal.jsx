import React, { Fragment } from 'react'
import { hrefs } from '../../assets/data/hrefs'
import { Discord } from '../../assets/icons/Discord'
import { Exit } from '../../assets/icons/Exit'

const HeaderModal = ({ visible, handleVisible }) => {
  const transitionModal = `${visible ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-200 ease-in-out`
  return (
    <Fragment>
      {visible && <div onClick={handleVisible} className='lg:hidden bg-[#0000004d] fixed inset-0 transition-all' />}
      <div
        className={`lg:hidden bg-white fixed rounded-l-xl top-0 right-0 bottom-0 w-80 ${transitionModal} pt-6 pr-12 pb-28 pl-6 overflow-auto min-h-screen`}
      >
        <div className='flex gap-4 flex-col'>
          <a href="/" className='flex gap-[1px] text-[19px] text-black font-extrabold'>
            <Discord />ia
          </a>
          {hrefs.map((hrf, index) => (
            <a key={index} href={`/${hrf.toLowerCase()}`} className='text-2xl font-semibold p-2 bg-cyan-400'>{hrf}</a>
          ))}
        </div>
      </div>
      <button
        onClick={handleVisible}
        className={`lg:hidden fixed top-0 right-0 pr-6 pt-6 text-black ${transitionModal}`}
      >
        <Exit />
      </button>
      <div className={`lg:hidden bg-white fixed bottom-0 right-0 w-80 p-6 text-center rounded-l-xl ${transitionModal}`}>
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