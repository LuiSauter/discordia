import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Emoji, Gif, Gift, Menu, PlusAction } from '../../assets/icons/action'
import { useToggle } from '../../hooks/useToggle'

const Chat = ({ username = "valen" }) => {
  const [message, setMessage] = useState('')
  const { toggleMenu, activeMenu } = useToggle()

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
    console.log(e.target)
  }

  return (
    <section className={`bg-discord_hover h-full w-full overflow-y-hidden relative flex flex-col md:pl-60 ${activeMenu && 'ml-[230px] sm:ml-[250px] min-w-[400px] scale-95 rounded-xl md:ml-0 md:scale-100 md:min-w-min md:rounded-none transition-all duration-100'} transform transition-transform duration-100`}>
      {activeMenu && <div className='absolute top-0 left-0 w-full h-full bg-discord_nav_server opacity-80 z-10 cursor-pointer md:hidden' onClick={toggleMenu} />}
      <header className='px-4 w-full border-b-2 border-discord_nav_server/50 hover:bg-discord_hover flex flex-row items-center justify-start gap-4 text-white transition-all'>
        <button onClick={toggleMenu} className='md:hidden hover:bg-discord_inputChat transition-colors duration-75 ease-out rounded-md px-2 py-[6px]'><Menu /></button>
        <h3 className='text-white text-base font-bold my-3'>Channel valen</h3>
      </header>
      <main className='h-full overflow-hidden flex flex-row relative text-white'>
        <div className='w-full overflow-hidden flex flex-col relative justify-end'>
          <div className='scrollbar-chat w-full h-full overflow-y-auto mb-16 p-4'>
            {largeText}
          </div>
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
        </div>
        <aside className='hidden w-56 lg:flex flex-shrink-0 h-full bg-discord_channels_bg transition-all duration-150'>
          ass
        </aside>
      </main>
    </section>
  )
}

export default Chat

const largeText = ` leading-normal
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.

leading-relaxed
So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.`