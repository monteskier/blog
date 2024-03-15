import { createSlice } from '@reduxjs/toolkit'
import {categories, posts} from '../../../Blog/helpers/blogPost'
import {images} from '../../../Blog/helpers/images'
const initialState = {
  posts:posts,
  images:images,
  categories:categories,

}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    selectCategory: (state, action) => {
        state.posts = initialState.posts
        state.posts = state.posts.filter((post) => (post.category) == (action.payload));
    },
  },
})

// Action creators are generated for each case reducer function
export const {  selectCategory } = blogSlice.actions

export default blogSlice