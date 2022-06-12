import { createSlice } from '@reduxjs/toolkit'

import { authApi } from './thunks'

const initialState = {
  authenticated: false,
  access_token: null,
  refresh_token: null,
  metadata: {
    countries: [],
  },
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: {
    [authApi.login.fulfilled.toString()]: (state, action) => {
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
      state.authenticated = true
    },
    [authApi.getMetadata.fulfilled.toString()]: (state, action) => {
      state.metadata = action.payload
    },
    [authApi.registration.fulfilled.toString()]: (state, action) => {
      state.access_token = action.payload.access_token
      state.refresh_token = action.payload.refresh_token
      state.authenticated = true
    },
  },
})
