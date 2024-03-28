import { useReducer } from "react"
import { DashboardLayout } from "../layouts/DashboardLayout"
import { NothingSelectedView, PostSelectedView } from "../views";
import { useDispatch, useSelector } from "react-redux";
import { startNewPost } from "../../store/slices/blog";

export const SelectedPostsPage = () => {
  const dispatch = useDispatch();
  const {posts, categories, isSaving, active} = useSelector( state => state.blog);
  // TODO cojer todas las entradas del blog, y pasarlas al options
  const onAddPost = ()=>{
    dispatch(startNewPost());
  }

  return (
    <DashboardLayout options={ {'postsMenu': true } } title='Entradas' >

      {(active)
        ?
        <PostSelectedView>
        </PostSelectedView>
        :
        <NothingSelectedView></NothingSelectedView>
      }
      
      {/* todo: que solo salga el boton de add en casa no NothingSelectedView */}
      <div className="">
        <button 
          disabled={isSaving}
          className="icono add-post d-inline-flex text-center align-items-center justify-content-center"
          onClick={onAddPost}
          >
          +
        </button>
      </div>
    </DashboardLayout>
    
  )
}
