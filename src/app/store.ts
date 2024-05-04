import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { spellApi } from '../service/apiRequest'


export const store = configureStore({
  reducer: {
   
    [spellApi.reducerPath]: spellApi.reducer,
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(spellApi.middleware),
})


setupListeners(store.dispatch)