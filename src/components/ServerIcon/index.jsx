import React from 'react'

const ServerIcon = ({ image = '' }) => {
  return (
    <img
      src={image}
      alt=""
      className='server-icon h-12'
    />
  )
}

export default ServerIcon