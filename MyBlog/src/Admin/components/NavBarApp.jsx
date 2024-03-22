import { useDispatch, useSelector } from "react-redux"
import { startLogout } from '../../store/slices/auth';
import { Link } from "react-router-dom"

export const NavBarApp = () => {
  const dispatch = useDispatch();

  const {displayName, status} = useSelector(state => state.auth);
  const onLogout = (e)=>{
    e.preventDefault();
    dispatch(startLogout());    
  };
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
                <li className="nav-item"><a href="#" className="nav-link">{ displayName }</a></li>                     
                <li className="nav-item">
                  <a href="#" className="nav-link" onClick={onLogout}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                      <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                    </svg>
                  </a>
                </li>                         
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
