import { createSlice } from '@reduxjs/toolkit'

export const RequestStatus = {
  Pending: 'pending',
  Fulfilled: 'fulfilled',
  Rejected: 'rejected',
}

const initialState = {
  loading: {},
  error: {},
}

export const requestStatus = createSlice({
  name: 'requestStatus',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => {
        return (
          action.type.endsWith(`/${RequestStatus.Pending}`) ||
          action.type.endsWith(`/${RequestStatus.Fulfilled}`) ||
          action.type.endsWith(`/${RequestStatus.Rejected}`)
        )
      },
      (state, action) => {
        const { type } = action
        const matches = /(.*)\/(pending|fulfilled|rejected)/.exec(type)
        if (!matches) return
        const [, requestName, requestState] = matches
        state.loading[requestName] = requestState === RequestStatus.Pending
        state.error[requestName] =
          requestState === RequestStatus.Rejected && action.payload
      }
    )
  },
})
