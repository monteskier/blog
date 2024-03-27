import { createSlice } from '@reduxjs/toolkit'
import {categories } from '../../../Blog/helpers/blogPost'
import {images} from '../../../Blog/helpers/images'
const initialState = {
  posts:[],
  images:images,
  categories:categories,
  isSaving:false,
  messageSaved:'',
  active:null,
  // {
  //    id:null,    
  //    title: null,
  //    description: null,
  //    img: ['', '', ''], //https:foto1.jpg, etc...
  //    category: null,
  //    featured: true,
  //    date:null
  // }

}

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {

    savingNewPost:(state)=>{
      state.isSaving = true;
    },
    selectCategory: (state, action) => {
        this.setPosts();
        state.posts = state.posts.filter((post) => (post.category) == (action.payload));
    },
    addNewEmptyPost:(state, action)=>{
      state.posts.push(action.payload);
      state.isSaving = false;
    },
    setActivePost:(state, action)=>{
      state.active = action.payload;
    },

    setPosts:(state, action)=>{
      state.posts = action.payload;
    },
    setSavingPost:(state, action)=>{

    },
    updatePost:(state, action)=>{

    },
    deletePostById:(state, action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const {  
  addNewEmptyPost,
  deletePostById,
  savingNewPost,
  selectCategory,                
  setActivePost,
  setPosts,
  setSavingPost,
  updatePost,
} = blogSlice.actions

export default blogSlice