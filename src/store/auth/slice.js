import { createSlice } from '@reduxjs/toolkit'

import { authApi } from './thunks'

const initialState = {
  authenticated: false,
  token: null,
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authApi.login.fulfilled.toString()]: (state, action) => {
      state.token = action.payload
      state.authenticated = true
    },
    [authApi.registration.fulfilled.toString()]: (state, action) => {
      state.token = action.payload
      state.authenticated = true
    },
  },
})
