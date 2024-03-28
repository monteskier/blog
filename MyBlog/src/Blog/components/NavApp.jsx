import { useDispatch } from "react-redux"
import { startLoadingPostsByCategory } from "../../store/slices/blog"

export const NavApp = ({categories=[]}) => {
const dispatch =  useDispatch();
const onClickCategory = (e)=>{
  const id = e.target.value;
  console.log(id);
  dispatch(startLoadingPostsByCategory(id));

}

  return (
    <>
      <hr />
      <div className="container">
        <div className="row">
        <nav className="nav justify-content-between">
          {categories.map( (cat)=>{ 
            return(
              <button key={cat.id} onClick={onClickCategory} value={cat.id} className="custom-button nav-link text-muted mx-2 my-2">{cat.title}</button>
            )}
          )}
        </nav>
        </div>
      </div>
    
    </>
  )
}