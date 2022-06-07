import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'wouter'
import { Exit } from '../../../assets/icons/Exit'
import { LoadingIcon } from '../../../assets/icons/Loading'
import { Plus } from '../../../assets/icons/Plus'
import avatar from '../../../assets/images/avatar-default.svg'

const UserChannels = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const [overUser, setOverUser] = useState(false)
  const { user } = useSelector(state => state)
  const handleOver = () => setMouseOver(!mouseOver)
  const handleOverUser = () => setOverUser(!overUser)

  const handleImgError = ({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src = avatar
  }

  return (
    <div
      onMouseEnter={handleOver}
      onMouseLeave={handleOver}
      className={`${mouseOver ? 'scrollbar-visible' : 'scrollbar-visible-over'} h-full py-2 pr-2 overflow-x-hidden overflow-y-auto`}
    >
      <div className='flex flex-row items-center text-discord_gray hover:text-white/80'>
        <h2 className='w-full pr-1 pl-4 text-inherit font-semibold text-xs flex flex-row cursor-pointer'>
          MENSAJES DIRECTOS
        </h2>
        <Plus styleString='h-5 w-5 text-inherit mr-2' />
      </div>
      <ul className='pl-2 pt-2 text-discord_gray h-max '>
        {user.data?._id ? (
          user.data?.channels.map(channel => {
            const owner = channel.owner.find(yourUser => yourUser._id !== user.data?._id)
            const { username, photoUrl } = owner
            return (
              <li
                onMouseEnter={handleOverUser}
                onMouseLeave={handleOverUser}
                className='flex gap-1 items-center cursor-pointer hover:bg-discord_channel_hover py-[6px] px-2 rounded-md hover:text-white/80 transition-all duration-100'
                key={channel._id}
              >
                <div className='flex flex-row justify-between items-center w-full'>
                  <Link
                    href={`/channels/@me/${channel._id}`} className='flex flex-row items-center'
                  >
                    <img
                      src={photoUrl}
                      onError={handleImgError}
                      alt={username}
                      className='w-8 h-8 rounded-full mr-3'
                    />
                    <span className='text-sm w-'>
                      {username.length < 17 ? username : username.substring(0, 17) + '...'}
                    </span>
                  </Link>
                  <button className={`${overUser ? '' : ''} text-white/50 hover:text-white/80`}>
                    <Exit width='h-[18px] w-[18px]' />
                  </button>
                </div>
              </li>
            )
          })
        ) : (
          <div className='grid place-content-center place-items-center h-full py-4 w-full'>
            <LoadingIcon />
          </div>
        )}
      </ul>
    </div>
  )
}

export default UserChannels
