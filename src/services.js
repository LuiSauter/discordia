import { dbConstants } from "./utils/constants"

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
    console.error(error.message)
    return { status: 'hey sauter, there is an error!.' }
  }
}

export const getUser = async ({ username = '' }) => {
  const user = await fetch(`${dbConstants.dbApiUri + dbConstants.dbEndPointUser}/${username}`)
  const data = await user.json()
  return data
}