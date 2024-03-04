

export const FeaturedPostApp = ({posts=[], categories=[]}) => {

  
  return (
    <>
    <div className="container">
      <div className="row my-5">
        
          {
            posts.map( (post) => {
              return(
                <div  key={post.id} className="col-12 col-md-6 animate__animated animate__fadeIn">
                  <div className="card d-flex flex-md-row overflow-hidden">
                    <div className="card-body col-8">
                      <strong className="text-primary d-inline-block mb-2">{categories[post.category].title}</strong>
                      <h3>{post.title}</h3>
                      <p className="mb-1 text-muted">Nov 12</p>
                      <p className="card-text">
                        { post.description.length > 75 ? `${post.description.substring(0,75)}...` : post.description }
                      </p>
                      <a href="#" className="stretched-link">Continuar Leyendo ...</a>
                    </div>
                    <div className="contenedor-imagen col-4">
                      <a href="">
                        <img src="http://via.placeholder.com/200x250/55595C?text=Thumbnail" className="card-img-right flex-auto d-none d-lg-block w-100" alt="">
                        </img>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
    </div>

    
    </>
  )
}
