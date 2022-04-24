import React from 'react'

const Button = ({ children, onClick, classStyle }) => {
  return (
    <button
      className={`${classStyle} rounded-full focus:outline-none hover:shadow-lg hover:text-discord_blurple transition duration-200 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button