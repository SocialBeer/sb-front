import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '../../services/api/services/AuthService'

const login = createAsyncThunk('auth/login', async (request) => {
  try {
    const response = await AuthService.login(request)

    return response
  } catch (e) {
    throw e.response.data.detail
  }
})

const registration = createAsyncThunk('auth/registration', async (request) => {
  try {
    const response = await AuthService.registration(request)

    return response
  } catch (e) {
    throw e.response.data.detail
  }
})

export const authApi = {
  login,
  registration,
}
