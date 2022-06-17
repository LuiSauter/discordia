import { dbConstants } from "./utils/constants"
// users
export const loginWithGoogle = async ({ username = '', email = '', photoUrl = '' }) => {
  try {
    const login = await fetch(`${dbConstants.dbApiUri + dbConstants.dbEndPointUser}/auth`, {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, photoUrl })
    })
    const data = await login.json()
    return data
  } catch (error) {
    console.error(error)
    return { status: 'hey sauter, there is an error!.' }
  }
}

export const getUser = async ({ username = '' }) => {
  try {
    const user = await fetch(`${dbConstants.dbApiUri + dbConstants.dbEndPointUser}/${username}`)
    if (!user.ok) {
      throw new NetworkError()
    }
    const data = await user.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}

// Server
export const createServer = async ({ serverName = '', image = '', userId = '' }) => {
  const res = await fetch(`${dbConstants.dbApiUri + dbConstants.dbEndPointServer}/add`, {
    method: 'POST',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ serverName, image, userId })
  })
  return res.status
}

// Channels
export const getChannel = async ({ channelId }) => {
  try {
    const res = await fetch(`${dbConstants.dbApiUri + dbConstants.dbEndPointChannel}/${channelId}`)
    if (!res.ok) {
      throw new NetworkError()
    }
    return await res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

class NetworkError extends Error {
  constructor(message) {
    super('Network Error ', message)
    this.name = message
  }
}