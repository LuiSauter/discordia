import React from 'react'
import { HashtagIcon } from '../../assets/icons/HashtagIcon'

const Channel = ({ id, channelName }) => {

  const setChannel = () => {
  }

  return (
    <li className='text-sm font-medium flex gap-1 items-center cursor-pointer hover:bg-discord_channel_hover p-1 rounded-md hover:text-white/80' onClick={setChannel}>
      <HashtagIcon /> {channelName}
    </li>
  )
}

export default Channel