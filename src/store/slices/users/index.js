import { createSlice } from '@reduxjs/toolkit'
const { REACT_APP_URL_DATABASE, REACT_APP_END_POINT_USER } = process.env

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.data = action.payload
    }
  }
});

export const { setUserList } = userSlice.actions

export const fetchAllUsers = () => (dispatch) => {
  fetch(`${REACT_APP_URL_DATABASE + REACT_APP_END_POINT_USER}`)
    .then(res => res.json())
    .then(data => dispatch(setUserList(data)))
    .catch(error => console.error(error))
}

export default userSlice.reducer;