import React from 'react'
import { HashtagIcon } from '../../assets/icons/HashtagIcon'

const Channel = ({ id, channelName }) => {

  const setChannel = () => {
  }

  return (
    <li className='font-medium flex items-center cursor-pointer hover:bg-discord_hover p-1 rounded-md hover:text-white/80' onClick={setChannel}>
      <HashtagIcon /> {channelName}
    </li>
  )
}

export default Channel