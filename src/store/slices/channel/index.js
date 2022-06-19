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
  // const newData = { _id: "62abf32fc3edab40c1e2e45b", message: objectData.message, channelId: objectData.channelId, createdAt: Date.now(), author: { username: "JancoAlvarezLuisGabriel", email: "janco7249@gmail.com", photoUrl: "https://lh3.googleusercontent.com/a-/AOh14GiprjDlsYm61mv-8-L6xMoXFAw5t38G8B7-wbsvcg=s96-c" }}
  createMessage(objectData)
}

export default channelSlice.reducer