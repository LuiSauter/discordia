import { useEffect, useRef, useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRoute } from 'wouter'
import { HashtagIcon } from '../../assets/icons/HashtagIcon'
import { fetchChannel } from '../../store/slices/channel'
import Image from '../Image'
import Container from './Container'
import FormChat from './FormChat'
import Message from './Message'

const Chat = ({ myId }) => {
  const messagesEndRef = useRef(null)
  const [yourUser, setYourUser] = useState({})
  const [, paramsServer] = useRoute('/channels/:serverId/:id')
  const [, paramsUser] = useRoute('/channels/@me/:id')
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.channel)

  /**
   * @description Scroll to bottom of chat
   */
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
      data?.owner && myId && setYourUser(data?.owner?.find(user => user._id !== myId))
      scrollToBottom()
    }
    return () => {
      subscribe = false
    }
  }, [data?.messages, myId])

  return (
    <Fragment>
      <Container header={data?.channelName ? data?.channelName : yourUser?.username} aside=''>
        <div className='w-full h-full overflow-hidden flex flex-col relative justify-end'>
          <div className='relative flex flex-col gap-5 justify-end w-full h-full overflow-hidden mb-1 transition-all duration-150'>
            <ul className='scrollbar-chat relative w-full h-max flex flex-col gap-5 overflow-y-auto transition-all duration-150'>
              {data?.messages && <Fragment>
                <li className='relative h-max pt-4 flex flex-col px-4 gap-3'>
                  <figure className='relative h-20 w-20'>
                    {data?.channelName
                      ? <HashtagIcon classStyle='w-full h-full bg-discord_channel_hover/80 rounded-full p-2' />
                      : <Image img={yourUser?.photoUrl} textAlt={yourUser?.username} classStyle='h-full w-full rounded-full' />}
                  </figure>
                  <h1 className='text-4xl font-bold min-h-[40px]'>
                    {data?.channelName
                      ? <>¡Te damos la bienvenida a #{data?.channelName}!</>
                      : yourUser?.username ? yourUser?.username : 'Username'}
                  </h1>
                  <p className='text-slate-200 text-base font-light'>
                    Este es el comienzo de
                    {data?.channelName
                      ? 'este servidor.'
                      : <>tu historial de mensajes directos con <span className='font-semibold'>@{yourUser?.username}</span></>}
                  </p>
                  <hr className='mt-1 border-slate-200/10' />
                </li>
                {data?.messages.map(message => (
                  <Message
                    key={message._id}
                    author={message.author}
                    id={message._id}
                    message={message.message}
                    createdAt={message.createdAt}
                    channelId={paramsUser?.id || paramsServer?.id}
                    myId={myId}
                  />
                ))}
              </Fragment>}
              <div ref={messagesEndRef} />
            </ul>
          </div>
          <FormChat
            username={yourUser?.username}
            channelId={paramsServer?.id || paramsUser?.id}
            isServer={paramsServer?.serverId !== '@me'}
          />
        </div>
      </Container>
    </Fragment>
  )
}

export default Chat