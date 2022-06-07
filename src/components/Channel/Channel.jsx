import { useState } from 'react'
import { Link } from 'wouter'
import { Exit } from '../../assets/icons/Exit'
import { HashtagIcon } from '../../assets/icons/HashtagIcon'
import avatar from '../../assets/images/avatar-default.svg'

const Channel = ({ id, photoUrl, name, isServer = false }) => {
  const [overUser, setOverUser] = useState(false)
  const handleOverUser = () => setOverUser(!overUser)

  const handleImgError = ({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src = avatar
  }
  return (
    <li
      onMouseEnter={handleOverUser}
      onMouseLeave={handleOverUser}
      className='flex gap-1 items-center cursor-pointer hover:bg-discord_channel_hover py-[6px] px-2 rounded-md hover:text-white/80 transition-all duration-100'
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <Link
          href={`/channels/@me/${id}`} className='flex flex-row items-center'
        >
          {photoUrl === 'hash' ?
            <HashtagIcon /> :
            <img
              src={photoUrl}
              onError={handleImgError}
              alt={name}
              className='w-8 h-8 rounded-full mr-3'
            />
          }
          <span className='text-sm w-'>
            {name.length < 20 ? name : name.substring(0, 20) + '...'}
          </span>
        </Link>
        {
          !isServer && <button className={`${overUser ? '' : 'hidden'} text-white/50 hover:text-white/80`}>
            <Exit width='h-[18px] w-[18px]' />
          </button>
        }
      </div>
    </li>
  )
}

export default Channel