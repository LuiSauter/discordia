import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from 'wouter'
import { Menu } from '../../assets/icons/action'
import { useToggle } from '../../hooks/useToggle'
import { fetchChannel } from '../../store/slices/channel'
import FormChat from './FormChat'
import Message from './Message'

const Chat = ({ username = "valen" }) => {
  const messagesEndRef = useRef(null)
  const { toggleMenu, activeMenu } = useToggle()
  const [, paramsServer] = useRoute('/channels/:serverId/:id')
  const [, paramsUser] = useRoute('/channels/@me/:id')
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.channel)

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  let subscribe = true
  useEffect(() => {
    if (subscribe) {
      if (paramsServer?.id || paramsUser?.id) {
        dispatch(fetchChannel({ channelId: paramsUser?.id || paramsServer?.id }))
      }
    }
    return () => {
      subscribe = false
    }
  }, [paramsServer?.id, paramsUser?.id])

  useEffect(() => {
    if (subscribe) {
      scrollToBottom()
    }
    return () => {
      subscribe = false
    }
  }, [data?.messages])

  // console.log((data?.owner && dataUser?._id) && data?.owner.find(user => user._id === dataUser?._id)._id)

  return (
    <section className={`bg-discord_hover h-full w-full overflow-y-hidden relative flex flex-col md:pl-60 ${activeMenu && 'ml-[230px] sm:ml-[250px] min-w-[400px] scale-95 rounded-xl md:ml-0 md:scale-100 md:min-w-min md:rounded-none transition-all duration-100'} transform transition-transform duration-100`}>
      {activeMenu && <div className='absolute top-0 left-0 w-full h-full bg-discord_nav_server opacity-80 z-10 cursor-pointer md:hidden' onClick={toggleMenu} />}
      <header className='px-4 w-full border-b-2 border-discord_nav_server/50 hover:bg-discord_hover flex flex-row items-center justify-start gap-4 text-white transition-all'>
        <button onClick={toggleMenu} className='md:hidden hover:bg-discord_inputChat transition-colors duration-75 ease-out rounded-md px-2 py-[6px]'><Menu /></button>
        <h3 className='text-white text-base font-bold my-3'>Channel valen</h3>
      </header>
      <main className='h-full w-full overflow-hidden flex flex-row relative text-white'>
        <div className='w-full overflow-hidden flex flex-col relative justify-end'>
          <div className='scrollbar-chat w-full h-full overflow-y-auto mb-16'>
            <ul className='flex flex-col gap-5 pt-4'>
              {data?.messages && data?.messages.map(message => (
                <Message
                  key={message._id}
                  author={message.author}
                  id={message._id}
                  message={message.message}
                  createdAt={message.createdAt}
                />
              ))}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <FormChat username={username} />
        </div>
        <aside className='hidden w-56 lg:flex flex-shrink-0 h-full bg-discord_channels_bg transition-all duration-150'>
          ass
        </aside>
      </main>
    </section>
  )
}

export default Chat