import React from 'react'

const Error = (params) => {
  return (
    <div>Page not found! {params.rest}</div>
  )
}

export default Error