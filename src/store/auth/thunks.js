import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '../../services/api/services/AuthService'

const login = createAsyncThunk('auth/login', async (request) => {
  try {
    const response = await AuthService.login(request)

    return response
  } catch (e) {
    throw e.response.data.detail.msg
  }
})

const registration = createAsyncThunk('auth/registration', async (request) => {
  try {
    const response = await AuthService.registration(request)

    return response
  } catch (e) {
    throw e.response.data.detail.msg
  }
})

const getMetadata = createAsyncThunk('auth/metadata', async () => {
  try {
    const response = await AuthService.metadata()

    return response.data
  } catch (e) {
    throw e.response.data.detail.msg
  }
})

export const authApi = {
  login,
  registration,
  getMetadata,
}
