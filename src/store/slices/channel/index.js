import { createSlice } from "@reduxjs/toolkit";
import { createMessage, getChannel } from "../../../services";

export const channelSlice = createSlice({
  name: 'channel',
  initialState: { data: {} },
  reducers: {
    setChannels: (state, action) => {
      state.data = action.payload
    },
    setMessages: (state, action) => {
      state.data = ({ ...state.data, messages: state.data.messages.concat(action.payload) })
    }
  }
})

export const { setChannels, setMessages } = channelSlice.actions

export const fetchChannel = ({ channelId }) => (dispatch) => {
  getChannel({ channelId })
    .then(data => dispatch(setChannels(data)))
}

/**
 * @params {message, myId, yourId, channelId, serverId} objectData
 * @returns {Promise<void>}
 */
export const sendMessage = (objectData) => (dispatch) => {
  createMessage(objectData)
}

export default channelSlice.reducer