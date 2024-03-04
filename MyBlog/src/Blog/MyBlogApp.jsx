import { useReducer } from 'react'
import {CarrouselApp, FeaturedPostApp, NavApp, NavBarApp} from './components'
import { images } from './helpers/images'
import { BlogReducer } from './BlogReducer';
import { posts, categories } from "./helpers/blogPost";

const initialState={
  selectCategory:0,
  posts,
  categories
}


export const MyBlogApp = () => {
  const [ state, dispatch ] = useReducer(BlogReducer, initialState);

  const handleSelectCategory = ({target})=>{
    const id = target.value;
    console.log(id);
    dispatch({
      payload:parseInt(id),
      type:'BLOG_CATEGORY'
    });
  }
  return (
    <>
      <header>
        <NavBarApp></NavBarApp>
        <CarrouselApp images={images} ></CarrouselApp>
        <NavApp onSelectCategory={handleSelectCategory} categories={categories}></NavApp>
      </header>
      <main>
        <FeaturedPostApp posts={state.posts} categories={categories}></FeaturedPostApp>
      </main>
    </>
  )
}

