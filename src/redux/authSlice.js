import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    login: {
      currentAccount: null,
      fetching: false,
      error: false,
    },
    register: {
      success: false,
      fetching: false,
      error: false
    },
  },
  reducers: {
    loginStart: (state) => {
      state.login.fetching = true;
      state.login.error = false;
    },
    loginSuccess: (state, action) => {
      state.login.currentAccount = action.payload;
      state.login.fetching = false;
      state.login.error = false;
    },
    loginError: (state) => {
      state.login.fetching = false;
      state.login.error = true;
    },
    loginClear: (state) => {
      state.login.currentAccount = null;
      state.login.fetching = false;
      state.login.error = false;
    },
    registerStart: (state) => {
      state.register.fetching = true;
      state.register.success = false;
      state.register.error = false;
    },
    registerSuccess: (state) => {
      state.register.fetching = false;
      state.register.success = true;
      state.register.error = false;
    },
    registerError: (state) => {
      state.register.fetching = false;
      state.register.success = false;
      state.register.error = true;
    },
    registerClear: (state) => {
      state.register.fetching = false;
      state.register.success = false;
      state.register.error = false;
    }
  },
});

export const {
  loginStart,
  loginSuccess,
  loginError,
  loginClear,
  registerStart,
  registerSuccess,
  registerError,
  registerClear
} = authSlice.actions;

export default authSlice.reducer;