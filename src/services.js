import { dbConstants } from "./utils/constants"

const { dbEndPointServer, dbApiUri, dbEndPointUser, dbEndPointChannel } = dbConstants

export const loginWithGoogle = async ({ username = '', email = '', photoUrl = '' }) => {
  try {
    const login = await fetch(`${dbApiUri + dbEndPointUser}/auth`, {
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
/**
 * @param {{username: string}} username to get profile
 * @returns {Promise<{user: object}>} object to visualize profile
 */
export const getUser = async ({ username = '' }) => {
  try {
    const user = await fetch(`${dbApiUri + dbEndPointUser}/${username}`)
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

/**
 * @param {{serverName:string, image:string, userId:string}} create server post server data
 * @returns {Promise<number>} Status code of the request
 */
export const createServer = async ({ serverName = '', image = '', userId = '' }) => {
  const res = await fetch(`${dbApiUri + dbEndPointServer}/add`, {
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
    const res = await fetch(`${dbApiUri + dbEndPointChannel}/${channelId}`)
    if (!res.ok) {
      throw new NetworkError()
    }
    return await res.json()
  } catch (error) {
    console.error(error)
    throw error
  }
}

export const createMessage = async (objectData) => {
  try {
    const res = await fetch(`${dbApiUri + dbEndPointChannel}/msg`, {
      method: 'POST',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(objectData)
    })
    return res.status
  } catch (error) {
    console.error(error)
    throw error
  }
}

/**
 * @param {{msgId: string, channelId: string}}
 * @returns {Promise<void>}
 */
export const deleteMessage = async ({ msgId, channelId }) => {
  try {
    const res = await fetch(`${dbApiUri + dbEndPointChannel}/msg/${msgId}/${channelId}`, {
      method: 'DELETE',
      cache: 'no-cache',
      headers: { 'content-type': 'application/json' }
    })
    return res.status
  } catch (error) {

  }
}


class NetworkError extends Error {
  constructor(message) {
    super('Network Error ', message)
    this.name = message
  }
}