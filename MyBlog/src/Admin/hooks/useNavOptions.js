import { useDispatch, useSelector } from "react-redux"
import { setActivePost } from "../../store/slices/blog/blogSlice";

export const useNavOptions = (postsMenu) => {  
  const dispatch = useDispatch();
  const {posts} = useSelector( state=> state.blog);

  const handleClickPost =(id)=>{
    console.log(id);
    const selectedPost = posts.filter( post => post.id === id );
    dispatch(setActivePost(selectedPost));

  }
  return ({
    postsMenu,
    posts, 
    handleClickPost
  })
}
