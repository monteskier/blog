
import { PropTypes } from "prop-types"

export const CarrouselApp = ({images}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col"></div>
            <div className="carousel slide carousel-fade" id="mi-carousel" data-bs-ride="carousel">
              <div className="carousel-inner">
                {images.map((img, index) =>{
                    return(
                      
                        <div className={index === 0 ? 'carousel-item active' : 'carousel-item' } data-bs-interval={index === 1 ? "3000" : ''} key={index}>
                          <div className="carousel-caption">
                            <h5>{img.title}</h5>
                            <p>{img.text}</p>
                          </div>
                          <img className="img-fluid" src={img.img} alt={`Slide ${index}`} ></img>
                        </div>
                    
                    )
                  }
                )}
              </div>

              {/*Controles*/}
              <button 
                className="carousel-control-prev"
                type="button"
                data-bs-target="#mi-carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
              </button>

              <button 
                className="carousel-control-next"
                type="button"
                data-bs-target="#mi-carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Siguiente</span>
              </button>

              {/* Indicadores */}

              <div className="carousel-indicators">
                <button 
                  type="button"
                  className="active"
                  data-bs-target="#mi-carousel"
                  data-bs-slide-to="0"
                  aria-label="Slide 1"
                ></button>
                <button 
                  type="button"
                  className=""
                  data-bs-target="#mi-carousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button 
                  type="button"
                  className=""
                  data-bs-target="#mi-carousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                  <button 
                  type="button"
                  className=""
                  data-bs-target="#mi-carousel"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}

CarrouselApp.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};