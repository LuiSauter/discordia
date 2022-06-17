import { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Emoji, Gif, Gift, PlusAction } from '../../assets/icons/action'

const FormChat = ({ username = '@username' }) => {
  const [message, setMessage] = useState('')

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      console.log('Handler submit')
    }
  }

  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target, message)
  }
  return (
    <div className='h-max w-full bg-discord_server absolute bottom-0 left-0'>
      <form onSubmit={handleSubmit} className='w-full flex justify-center px-4 pb-4 items-center h-full'>
        <div className='flex flex-row items-start w-full rounded-xl bg-discord_inputChat overflow-hidden'>
          <button className='w-14 flex text-discord_inputChat items-center justify-center px-4 py-3'><PlusAction /></button>
          <TextareaAutosize onKeyDown={handleKeyDown} onChange={handleChange} maxRows={10} className='bg-discord_inputChat w-full resize-none outline-none flex flex-row py-[9px] text-base text-white' placeholder={`Enviar un mesage a @${username}`} />
          <div className='flex flex-row pr-2'>
            <button onClick={(e) => e.preventDefault()} className='w-min flex items-center justify-center px-2 py-3'><Gift /></button>
            <button onClick={(e) => e.preventDefault()} className='hidden w-min sm:flex items-center justify-center px-2 py-2'><Gif /></button>
            <button onClick={(e) => e.preventDefault()} className='w-min flex items-center justify-center px-2 py-3'><Emoji /></button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormChat
