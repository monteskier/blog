import {PostForms} from '../components/index'
import { ImgeGallery } from '../components/index'

export const PostSelectedView = ({categories}=[]) => {
  return (
    <div>
      <PostForms categories={categories}></PostForms>
      <ImgeGallery></ImgeGallery>
    </div>
  )
}
