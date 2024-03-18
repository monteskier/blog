import { createSlice } from '@reduxjs/toolkit';
export const authSlice = createSlice({
  name: 'auth',
  initialState:{
    status:'not-authenticated',//checking, not-authenticated, authenticated
    uid:null,
    email:null,
    role:null,
    displayName:null,
    photoURL:null,
    errorMessage:null,

  },
  reducers: {
    increment: (state,/* action */) => {
      state.counter += 1;
    },
    login: (state, {payload})=>{
      
      state.status='authenticated',//checking, not-authenticated, authenticated
      state.uid=payload.uid
      state.email=payload.email
      state.role=payload.role
      state.displayName=payload.displayName
      state.photoURL=payload.photoURL
      state.errorMessage=null


    },
    logout:(state, {payload}) =>{
      state = this.initialState;
      state.errorMessage = payload.console.errorMessage;

    },
    checkingCredentials:(state, action) =>{
      state.status = 'checking';
    },

  },
})
export const { login, logout, checkingCredentials } = authSlice.actions;