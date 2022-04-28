import React from 'react'

const ServerIcon = ({ image = '' }) => {
  return (
    <img
      src={image}
      alt="server discordia"
      className='server-icon server-default w-12 object-cover'
    />
  )
}

export default ServerIcon