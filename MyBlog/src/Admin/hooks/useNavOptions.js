import { useDispatch, useSelector } from "react-redux"
import { setActivePost } from "../../store/slices/blog/blogSlice";

export const useNavOptions = (postsMenu) => {  
  const dispatch = useDispatch();
  const {posts} = useSelector( state=> state.blog);

  const handleClickPost =(post)=>{        
    dispatch(setActivePost(post));
  }
  return ({
    postsMenu,
    posts, 
    handleClickPost
  })
}
