import { useSelector } from 'react-redux'
import {PostForms} from '../components/index'
import { ImgeGallery } from '../components/index'


export const PostSelectedView = () => {
  const { categories } = useSelector( state => state.blog);
  return (
    <div>
      <PostForms categories={categories}></PostForms>
      <ImgeGallery></ImgeGallery>
    </div>
  )
}
