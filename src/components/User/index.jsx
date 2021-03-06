import { Headset, Mic, Setting } from '../../assets/icons/action'
import avatar from '../../assets/images/avatar-default.svg'

const User = ({ image = avatar, username = 'username', id = '0101' }) => {
  const handleErrorimg = ({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src = avatar
  }
  return (
    <div className='bg-discord_user h-14 px-2 flex flex-row flex-shrink-0 justify-center items-center'>
      <div className='w-8 h-8 mr-2 relative rounded-full flex flex-shrink-0 items-center'>
        <img className='rounded-full' onError={handleErrorimg} src={image} alt={username} />
      </div>
      <div className='text-[13px] text-white font-semibold flex flex-col w-[90px] overflow-hidden leading-4'>
        <span title={username} className='whitespace-nowrap w-full cursor-pointer'>{username}</span>
        <span className='font-normal'>#{id.substring(0, 4)}</span>
      </div>
      <div className='flex flex-row text-white'>
        <span title='Desactivar Silencio' className='rounded-md w-8 h-8 grid place-content-center place-items-center hover:bg-discord_hover cursor-pointer relative'>
          <Mic /><div className='w-[3px] h-5 bg-red-700 absolute rotate-45' />
        </span>
        <span title='Ensordecer' className='rounded-md w-8 h-8 grid place-content-center place-items-center hover:bg-discord_hover cursor-pointer'>
          <Headset />
        </span>
        <button title='Ajustes de usuario' className='rounded-md w-8 h-8 grid place-content-center place-items-center hover:bg-discord_hover'>
          <Setting />
        </button>
      </div>
    </div>
  )
}

export default User