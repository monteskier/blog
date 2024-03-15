import { configureStore } from '@reduxjs/toolkit'
import { blogSlice } from './slices/blog'

export const store = configureStore({
  reducer:{ 'blog': blogSlice.reducer }
})