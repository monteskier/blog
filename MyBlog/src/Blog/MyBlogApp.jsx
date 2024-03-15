import { useSelector, useDispatch } from 'react-redux';
import{selectCategory} from '../store/slices/blog';
// import { useReducer } from 'react'
import {CarrouselApp, FeaturedPostApp, NavApp, NavBarApp} from './components'
// import { images } from './helpers/images'
// import { BlogReducer } from './BlogReducer';


export const MyBlogApp = () => {
  // const [ state, dispatch ] = useReducer(BlogReducer, initialState);
  const {images, posts, categories} = useSelector( state => state.blog);
  const dispatch = useDispatch();
  const handleSelectCategory = (e)=>{
    console.log(e.target.value)
    dispatch(selectCategory(e.target.value));
  }

  return (
    <>
      <header>
        <NavBarApp></NavBarApp>
        <CarrouselApp images={images} ></CarrouselApp>
        <NavApp onSelectCategory={handleSelectCategory} categories={categories}></NavApp>
      </header>
      <main>
        <FeaturedPostApp posts={posts} categories={categories}></FeaturedPostApp>
      </main>
    </>
  )
}

