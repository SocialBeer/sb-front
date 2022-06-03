import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
  configureStore,
  combineReducers,
  createReducer,
} from '@reduxjs/toolkit'

import { auth } from './auth/slice'
import { requestStatus } from './requestStatus/slice'

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
}

const appReducer = combineReducers({
  auth: auth.reducer,
  requestStatus: requestStatus.reducer,
})

const rootReducer = createReducer({}, (builder) => {
  builder.addDefaultCase((state, action) => appReducer(state, action))
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)
