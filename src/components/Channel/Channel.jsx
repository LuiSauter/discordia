import { useState } from 'react'
import { Link } from 'wouter'
import { Exit } from '../../assets/icons/Exit'
import { HashtagIcon } from '../../assets/icons/HashtagIcon'
import avatar from '../../assets/images/avatar-default.svg'

const Channel = ({ id, photoUrl, name, isServer = false, serverId, isActive = false }) => {
  const [overUser, setOverUser] = useState(false)
  const handleOverUser = () => setOverUser(!overUser)

  const handleImgError = ({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src = avatar
  }
  return (
    <article
      onMouseEnter={handleOverUser}
      onMouseLeave={handleOverUser}
      className={`flex gap-1 items-center cursor-pointer rounded-md hover:text-white/80 transition-all duration-100 ${isActive ? 'bg-discord_channel_hover' : 'hover:bg-discord_channel_hover/80'}`}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <Link
          href={`/channels/${isServer ? serverId : '@me'}/${id}`} className='flex flex-row px-2 py-[4px] items-center w-full h-full'
        >
          {photoUrl === 'hash' ?
            <HashtagIcon /> :
            <img
              src={photoUrl}
              onError={handleImgError}
              alt={name}
              className='w-8 h-8 rounded-full mr-3 object-cover'
            />
          }
          <span className='text-sm w-'>
            {name.length < 20 ? name : name.substring(0, 20) + '...'}
          </span>
        </Link>
        {
          !isServer && <button className={`${overUser ? '' : 'hidden'} text-white/50 hover:text-white/80 pr-2`}>
            <Exit width='h-[18px] w-[18px]' />
          </button>
        }
      </div>
    </article>
  )
}

export default Channel