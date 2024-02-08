import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/Auth/authSlice'
import { baseApi } from './api/BaseApi'

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch