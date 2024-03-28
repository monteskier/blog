import { createSlice } from '@reduxjs/toolkit'
import {images} from '../../../Blog/helpers/images'
const initialState = {
  posts:[],
  images:images,
  categories:[],
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
    setCategories:(state, action)=>{
      state.categories = action.payload;
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
  setCategories,
  setSavingPost,
  updatePost,
} = blogSlice.actions

export default blogSlice