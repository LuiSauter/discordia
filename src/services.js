const { REACT_APP_URL_DATABASE, REACT_APP_END_POINT_USER } = process.env

export const loginWithGoogle = async ({ username = '', email = '', photoUrl = '' }) => {
  try {
    const login = await fetch(`${REACT_APP_URL_DATABASE + REACT_APP_END_POINT_USER}/auth`, {
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

export const getUser = async ({ username = 'sauter' }) => {
  const user = await fetch(`${REACT_APP_URL_DATABASE + REACT_APP_END_POINT_USER}/${username}`)
  const data = await user.json()
  return data
}