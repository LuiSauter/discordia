import { createSlice } from '@reduxjs/toolkit'
import { dbConstants } from '../../../utils/constants';

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
  fetch(`${dbConstants.dbApiUri + dbConstants.dbEndPointUser}`)
    .then(res => res.json())
    .then(data => dispatch(setUserList(data)))
    .catch(error => console.error(error))
}

export default userSlice.reducer;