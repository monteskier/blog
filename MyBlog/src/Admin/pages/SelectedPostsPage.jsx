import { useReducer } from "react"
import { DashboardLayout } from "../layouts/DashboardLayout"
import { BlogReducer } from "../../Blog/BlogReducer";
import { posts, categories } from "../../Blog/helpers/blogPost";
import { PostSelectedView } from "../views";

const initialState={
  selectCategory:0,
  posts,
  categories
}


export const SelectedPostsPage = () => {

  // TODO cojer todas las entradas del blog, y pasarlas al options
  const [ state ] = useReducer(BlogReducer, initialState);

  return (
    <DashboardLayout options={ {'posts':state.posts } } title='Entradas' >
      <PostSelectedView categories={state.categories}>
      </PostSelectedView>
    </DashboardLayout>
    
  )
}
