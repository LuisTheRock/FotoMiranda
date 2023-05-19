import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

export const authActions = createSlice({
  name: 'authActions',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const { setLogin } = authActions.actions;
export default authActions.reducer;
