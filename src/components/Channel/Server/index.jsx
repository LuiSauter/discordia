import { useState } from "react"
import { useRoute } from "wouter"
import { ArrowDown } from "../../../assets/icons/ArrowDown"
// import { LoadingIcon } from "../../../assets/icons/Loading"
import { useChannels } from "../../../hooks/useChannels"
import Channel from "../Channel"


const ServerChannels = () => {
  const [mouseOver, setMouseOver] = useState(false)
  const [match, params] = useRoute('/channels/:serverId/:id')
  const handleOver = () => setMouseOver(!mouseOver)
  const { channels } = useChannels(params.serverId)
  return (
    <nav className='flex flex-col h-full justify-start overflow-y-auto'>
      <header className='py-3 px-4 w-full border-b-2 border-discord_nav_server/80 hover:bg-discord_hover flex flex-row items-center justify-between text-white transition-all cursor-pointer'>
        <h1 className='text-white text-base font-bold'>Discordia</h1>
        <ArrowDown styleString='h-5 w-5' />
      </header>
      <div
        onMouseEnter={handleOver}
        onMouseLeave={handleOver}
        className={`${mouseOver ? 'scrollbar-visible' : 'scrollbar-visible-over'} h-full py-2 pr-2 overflow-x-hidden overflow-y-auto`}
      >
        <ul className='pl-2 pt-2 text-discord_gray h-max '>
          {Object.keys(channels).map(key => channels[key].map(channel => (
            <li key={channel._id}>
              <details open={true} className='flex flex-row'>
                <summary>{channel.section}</summary>
                <Channel id={channel._id} photoUrl='hash' name={channel.channelName} isServer={true} />
              </details>
            </li>
          )))}
        </ul>
      </div>
    </nav>
  )
}

export default ServerChannels
