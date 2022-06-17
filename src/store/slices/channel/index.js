import { createSlice } from "@reduxjs/toolkit";
import { getChannel } from "../../../services";

export const channelSlice = createSlice({
  name: 'channel',
  initialState: { data: {} },
  reducers: {
    setChannels: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setChannels } = channelSlice.actions

export const fetchChannel = ({ channelId }) => (dispatch) => {
  getChannel({ channelId })
    .then(data => dispatch(setChannels(data)))
}

export default channelSlice.reducer