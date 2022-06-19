import avatar from '../assets/images/avatar-default.svg'

const Image = ({ img = avatar, textAlt = 'Discordia', classStyle = 'w-full h-full' }) => {
  const errorHandler = ({ currentTarget }) => {
    currentTarget.onerror = false
    currentTarget.src = avatar
  }

  return (
    <img onError={errorHandler} src={img} alt={textAlt} className={classStyle} />
  )
}

export default Image