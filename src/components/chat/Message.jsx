import { Fragment, useRef, useState, memo } from "react"
import { useDispatch } from "react-redux"
import { DotsHorizontal, PencilEdit } from "../../assets/icons/action"
import useTimeAgo from "../../hooks/useTimeAgo"
import { deleteMessage } from "../../services"
import { fetchChannel } from "../../store/slices/channel"
import Image from "../Image"
import Modal from "../Modal"
import Portal from "../Portal"

const Message = ({ id = '', author, message = '', createdAt = Date.now(), channelId = '', myId = '' }) => {
  const { timeago, hourAndMinute } = useTimeAgo(new Date(createdAt))
  const [showModal, setShowModal] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [overAction, setOverAction] = useState(false)
  const [activeMenu, setActiveMenu] = useState(false)
  const [positionBounding, setpositionBounding] = useState(20)
  const elRef = useRef(null)
  const dispatch = useDispatch()

  const handleMouseEnter = () => setOverAction(true)
  const handleMouseLeave = () => setOverAction(false)

  const handleToggleMenu = () => {
    setActiveMenu(!activeMenu)
    setOverAction(false)
  }
  /** @description get position bounding of current viewport page for dynanic position  */
  const handleBounding = () => {
    setpositionBounding(String(elRef.current.getBoundingClientRect().top - 12))
  }

  const handleAlertForDelete = () => {
    setIsDelete(!isDelete)
    setShowModal(!showModal)
  }

  const deleteMessageById = (msgId) => {
    handleAlertForDelete()
    deleteMessage({ msgId, channelId })
      .then(response => {
        handleToggleMenu()
        return response === 202 && dispatch(fetchChannel({ channelId }))
      })
  }

  return (
    <Fragment>
      <li id={id} ref={elRef} onClick={handleBounding} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='relative flex flex-row items-start gap-4 hover:bg-discord_channels_bg px-4 transition-colors duration-100 ease-out'>
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
        {overAction && <div className='absolute -top-3 right-4 bg-discord_server rounded-[4px] border border-discord_nav_server/80 text-sm text-slate-200/70 hover:shadow-md shadow-black/30 overflow-hidden'>
          <button className='px-3 py-2 hover:bg-discord_channel_hover text-inherit'>
            <PencilEdit />
          </button>
          <button onClick={handleToggleMenu} className='px-3 py-2 hover:bg-discord_channel_hover text-inherit'>
            <DotsHorizontal />
          </button>
        </div>}
        {activeMenu &&
          <Portal wrapperId='portal-root'>
            <div onClick={handleToggleMenu} className='fixed inset-0 h-full w-full z-20' />
            <div style={{ top: `${positionBounding > 480 ? 480 : positionBounding}px` }} className={`absolute h-max w-52 top-0 right-16 z-30 p-2 flex rounded-[4px] shadow-xl bg-discord_menuACtion shadow-discord_nav_server/70`}>
              <ul className='flex flex-col w-full h-max z-50 relative text-slate-200 text-[13px]'>
                <li className='cursor-pointer px-2 py-[6px] rounded-[3px] hover:bg-discord_blue_btn hover:text-white'>Editar mensaje</li>
                <li className='cursor-pointer px-2 py-[6px] rounded-[3px] hover:bg-discord_blue_btn hover:text-white'>Fijar mensaje</li>
                {author._id === myId && <li onClick={handleAlertForDelete} className='cursor-pointer px-2 py-[6px] rounded-[3px] hover:bg-red-500 hover:text-white'>Eliminar mensaje</li>}
              </ul>
            </div>
          </Portal>
        }
      </li>
      {isDelete && <Modal showModal={showModal} classSytle="bg-discord_hover text-white p-0">
        <section className="flex flex-col gap-4 p-4">
          <h1 className='text-lg font-semibold'>Eliminar mensaje</h1>
          <p className='text-sm text-slate-300 font-light'>¿Estás seguro de que quieres eliminar este mensaje?</p>
          <article className='border border-discord_nav_server rounded-md px-4 py-2 flex flex-row gap-4 items-start'>
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
          </article>
        </section>
        <footer className='w-full bg-discord_channels_bg p-4 flex justify-end gap-4 text-sm'>
          <button onClick={handleAlertForDelete} className="px-6 py-2 rounded-md">Cancelar</button>
          <button onClick={() => deleteMessageById(id)} className="px-6 py-2 rounded-md bg-red-500 hover:opacity-70 hover:bg-red-600">Eliminar</button>
        </footer>
      </Modal>}
    </Fragment >
  )
}

export default memo(Message)
