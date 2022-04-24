import React, { useState } from 'react'
const ButtonLogin = () => {
  const [auth, setAuth] = useState(false)
  return (
    <button
      className='bg-white py-2 rounded-full text-sm md:text-sm px-4 focus:outline-none hover:shadow-lg hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap'
      onClick={() => {
        setAuth(!auth)
      }}
    >
      {auth ? 'Open Discordia' : 'Login'}
    </button>
  )
}

export default ButtonLogin