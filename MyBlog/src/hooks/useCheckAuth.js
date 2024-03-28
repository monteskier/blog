import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { login, logout } from "../store/slices/auth";
import { startLoadingCategories, startLoadingPosts } from "../store/slices/blog";

export const useCheckAuth = ()=>{
  const {status} = useSelector(state => state.auth);
  
  const dispatch = useDispatch();

  useEffect(()=>{
    onAuthStateChanged(FirebaseAuth, async(user)=>{
      
      await dispatch(startLoadingCategories());
      await dispatch(startLoadingPosts());

      if(!user) return dispatch(logout());      
      const {uid, email, displayName, photoURL} = user;
      dispatch(login({uid, email, photoURL, displayName}))      

    } );
  },[]);

  return status;
}