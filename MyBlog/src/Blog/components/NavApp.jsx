export const NavApp = ({onSelectCategory, categories=[]}) => {


  return (
    <>
      <hr />
      <div className="container">
        <div className="row">
        <nav className="nav justify-content-between">
          {categories.map( (cat)=>{ 
            return(
              <button key={cat.id} onClick={onSelectCategory} value={cat.id} className="custom-button nav-link text-muted mx-2 my-2">{cat.title}</button>
            )}
          )}
        </nav>
        </div>
      </div>
    
    </>
  )
}