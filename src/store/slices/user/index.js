import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../../services";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: {}
  },
  reducers: {
    setUserByUsername: (state, action) => {
      state.data = action.payload
    }
  }
})

export const { setUserByUsername } = userSlice.actions

export const fetchUser = (username) => (dispatch) => {
  getUser({ username })
    .then(data => dispatch(setUserByUsername(data)))
}

export default userSlice.reducer;