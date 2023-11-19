import { configureStore } from '@reduxjs/toolkit'
import { BlogsApi } from '../Apis/services/BlogServiceApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [BlogsApi.reducerPath]: BlogsApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
      .concat(BlogsApi.middleware)
})

setupListeners(store.dispatch)