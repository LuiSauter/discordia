import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TextareaAutosize from 'react-textarea-autosize'
import { Emoji, Gif, Gift, PlusAction } from '../../assets/icons/action'
import { sendMessage } from '../../store/slices/channel'

const FormChat = ({ channelId = '', username = '@username' }) => {
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.user)
  const { data: dataChannel } = useSelector(state => state.channel)

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      const yourId = dataChannel.owner.find(user => user._id !== data?._id)?._id
      dispatch(sendMessage({ message, channelId, myId: data?._id, yourId }))
      setMessage('')
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className='h-max w-full bg-discord_server sticky bottom-0 left-0'>
      <form onSubmit={handleSubmit} className='w-full flex justify-center px-4 pb-4 items-center h-full'>
        <div className='flex flex-row items-start w-full rounded-xl bg-discord_inputChat overflow-hidden'>
          <button className='w-14 flex text-discord_inputChat items-center justify-center px-4 py-3'><PlusAction /></button>
          <TextareaAutosize
            onKeyDown={handleKeyDown}
            value={message}
            onChange={handleChange}
            cols={1}
            maxRows={10}
            className='bg-discord_inputChat w-full resize-none outline-none flex flex-row py-[9px] text-base text-white'
            placeholder={`Enviar un mesage a @${username}`}
          />
          <div className='flex flex-row pr-2'>
            <button onClick={(e) => e.preventDefault()} className='hidden w-min sm:flex items-center justify-center px-2 py-3'>
              <Gift />
            </button>
            <button type='button' onClick={(e) => e.preventDefault()} className='w-min flex items-center justify-center px-2 py-3'>
              <Emoji />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormChat
