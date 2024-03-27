import {doc, setDoc, collection} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../../firebase/config';
import { addNewEmptyPost, savingNewPost, setActivePost, setPosts } from './blogSlice';
import { loadNotes } from '../../../Admin/helpers/loadPosts';

export const startNewPost = ()=>{
  return async(dispatch, getState) =>{
    const {uid} = getState().auth;
    dispatch(savingNewPost()); //canvia el stado isSaving a true
    //uid
    const newPost = {  
          title: null,
          description: null,
          user:uid,
          img: null, //https:foto1.jpg, etc...
          category: null,
          featured: false,
          date:new Date().getTime(),
    }

    const newDoc = doc( collection(FirebaseDB, `/posts/`) );
    const setDocResp = await setDoc(newDoc, newPost);

    console.log({newDoc, setDocResp})
    newPost.id = newDoc.id;
    dispatch(addNewEmptyPost(newPost));
    dispatch(setActivePost(newPost));
    //dispatch(newNote)
    //dispatch(activeNote)
  }

};

export const startLoadingPosts = ()=>{
  return async(dispatch, getState)=>{
    const posts = await loadNotes();
    dispatch(setPosts(posts))
  }
}