import { configureStore } from '@reduxjs/toolkit'
import { blogSlice } from './slices/blog'
import { authSlice } from './slices/auth'

export const store = configureStore({
  reducer:{ 
    'blog': blogSlice.reducer ,
    'auth': authSlice.reducer
  }
})