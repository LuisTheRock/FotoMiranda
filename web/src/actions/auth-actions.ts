import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
  darkMode: false,
};

export const authActions = createSlice({
  name: 'authActions',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isAuth = action.payload;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    }
  },
});

export const { setLogin, setDarkMode } = authActions.actions;
export default authActions.reducer;