import { Link } from "react-router-dom"

export const NavBarApp = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <a href="#" className="navbar-brand">Navbar</a>

          {/* Boton para el menu movil */}
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Mostrar / Ocultar Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* } Menu de navegacion --> */}
          <div className="collapse navbar-collapse" id="menu">
            <div className="d-flex justify-content-between align-items-center w-100">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link to="/admin/" className="nav-link">Inicio</Link></li>              
              </ul>
              <ul className='navbar-nav mb-2 mb-lg-0'>
                <li className="nav-item"><a href="#" className="nav-link">Jonh Doe</a></li>              
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
