import { posts } from "./helpers/blogPost";

export const BlogReducer = (state, action) => {
  // HAY QUE COJER TODOS LOS ELEMENTOS SIEMPRE

  switch (action.type) {
    case 'BLOG_ALL':
      return {...state,
        posts,
        selectCategory:0
      };
    case 'BLOG_CATEGORY':
      
      return {
        ...state,
        posts: posts.filter((post) => (post.category) === (action.payload)),
        selectCategory: action.payload
      };
    default:
      return state;
  }
};
