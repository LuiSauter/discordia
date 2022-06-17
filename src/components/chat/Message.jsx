import useTimeAgo from "../../hooks/useTimeAgo"

const Message = ({ id = '', author = '', message = '', createdAt = Date.now() }) => {
  const { timeago, hourAndMinute } = useTimeAgo(new Date(createdAt))
  return (
    <li id={id} className='flex flex-row items-start gap-4 hover:bg-discord_channels_bg px-4 transition-colors duration-100 ease-out'>
      <figure className='relative rounded-full w-10 h-10 flex-shrink-0 my-1 select-none'>
        <img src={author.photoUrl} alt={author.username} className='rounded-full w-full h-full' />
      </figure>
      <div className='flex flex-col'>
        <h2 className='flex flex-row items-center gap-2'>
          <span className='cursor-pointer text-[14px] font-medium'>{author.username}</span>
          <time dateTime={hourAndMinute} title={hourAndMinute} className='select-none text-[13px] font-extralight'>{timeago}</time>
        </h2>
        <p className='text-slate-200 font-light'>{message}</p>
      </div>
    </li>
  )
}

export default Message