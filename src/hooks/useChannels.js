import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const INITIAL_STATE = { information: [], channelText: [], channelVoice: [] }

export const useChannels = (id) => {
  const [channels, setChannels] = useState(INITIAL_STATE)
  const { data } = useSelector(state => state.user)

  useEffect(() => {
    let cleanup = true
    if (cleanup) {
      setChannels(INITIAL_STATE)
      if (data.servers) {
        const server = data.servers.find(server => server._id === id)
        for (let index = 0; index < server.channels.length; index++) {
          const element = server.channels[index];
          const { section } = element
          section === 'información'
            ? setChannels(prevState => ({ ...prevState, information: [...prevState.information, element] }))
            : section === 'canales de texto'
              ? setChannels(prevState => ({ ...prevState, channelText: [...prevState.channelText, element] }))
              : section === 'canales de voz' && setChannels(prevState => ({ ...prevState, channelVoice: [...prevState.channelVoice, element] }))
        }
      }
    }
    return () => {
      cleanup = false
    }
  }, [data.servers, id])

  return { channels }
}