import useTimeAgo from "../../hooks/useTimeAgo"
import Image from "../Image"

const Message = ({ id = '', author = '', message = '', createdAt = Date.now() }) => {
  const { timeago, hourAndMinute } = useTimeAgo(new Date(createdAt))

  return (
    <li id={id} className='relative flex flex-row items-start gap-4 hover:bg-discord_channels_bg px-4 transition-colors duration-100 ease-out'>
      <figure className='relative rounded-full w-10 h-10 flex-shrink-0 my-1 select-none'>
        <Image img={author.photoUrl} textAlt={author.username} classStyle='rounded-full w-full h-full' />
      </figure>
      <div className='flex flex-col'>
        <h2 className='flex flex-row items-center gap-2'>
          <span className='cursor-pointer text-[14px] font-medium'>{author.username}</span>
          <time dateTime={hourAndMinute} title={hourAndMinute} className='select-none text-[13px] font-extralight'>{timeago}</time>
        </h2>
        <p className='flex flex-col'>
          {message.split('\n').map((msg, index) => (
            msg === '' ? <br /> : <span key={index} className='text-slate-200 font-light'>{msg}</span>
          ))}
        </p>
      </div>
    </li>
  )
}

export default Message