import {doc, setDoc, collection} from 'firebase/firestore/lite'
import { FirebaseDB } from '../../../firebase/config';
import { addNewEmptyPost, savingNewPost, setActivePost, setCategories, setPosts, setSavingPost, updatePost } from './blogSlice';
import { loadCategories, loadNotes, loadPostsByCategory } from '../../../Admin/helpers/loadPosts';

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
    
    newPost.id = newDoc.id;
    dispatch(addNewEmptyPost(newPost));
    dispatch(setActivePost(newPost));
    //dispatch(newNote)
    //dispatch(activeNote)
  }

};

export const startLoadingPosts = ()=>{
  return async(dispatch, getState)=>{
    const posts = await loadNotes(getState().blog.categories);
    dispatch(setPosts(posts))
  }
}

export const startLoadingCategories =  ()=>{
  return async(dispatch) =>{
    const categories = await loadCategories();
    dispatch(setCategories(categories));
  }
}

export const startLoadingPostsByCategory = (id)=>{
  return async(dispatch)=>{
    const posts = await loadPostsByCategory(id);
    dispatch(setPosts(posts));
  }
}
export const startSavingPost = ()=>{
    return async (dispatch, getState)=>{
      dispatch(setSavingPost());
      const {active} = getState().blog;      
      const postToFireStore = {...active};
      delete postToFireStore.id;

      console.log(postToFireStore);
      const docRef = doc(FirebaseDB,`posts/${active.id}`);
      await setDoc(docRef, postToFireStore, {merge:true});
      dispatch(updatePost(active));
    }
}