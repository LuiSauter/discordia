import React from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'wouter'
import { HashtagIcon } from '../../assets/icons/HashtagIcon'

const Channel = ({ id, channelName }) => {
  const dispatch = useDispatch()
  const [, setLocation] = useLocation()

  const setChannel = () => {
    dispatch(
      setChannel({
        channelId: id,
        channelName: channelName,
      })
    )
    setLocation(`/channels/${id}`)
  }

  return (
    <div className='font-medium flex items-center cursor-pointer hover:bg-[#3A3C43] p-1 rounded-md  hover:text-white' onClick={setChannel}>
      <HashtagIcon /> {channelName}
    </div>
  )
}

export default Channel