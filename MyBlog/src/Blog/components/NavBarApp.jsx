export const NavBarApp = () => {
  return (
    <>
		<div className="bg-dark collapse" id="navbarHeader">
			<div className="container">
				<div className="row acerca-de">
          <div className="col-12 col-lg-4 foto text-center">
            <img src="img/avatar.jpg" className="rounded-circle mb-3" alt=""></img>
            <p className="nombre">Natalia Chernyavska</p>
          </div>
					<div className="col-12 col-lg-4 py-4">
						<h4 className="text-white">Acerca de</h4>
						<p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem magni eaque voluptates, amet dolor vel nihil asperiores aliquam sit ullam cum inventore. Laudantium neque esse adipisci magnam, placeat fugit iusto?</p>
					</div>
					<div className="col-12 col-lg-4 py-4">
						<h4 className="text-white">Contacto</h4>
						<ul className="list-unstyled">
							<li><a href="#" className="text-white">Siguenos en Twitter</a></li>
							<li><a href="#" className="text-white">Like en Facebook</a></li>
							<li><a href="#" className="text-white">Envianos un correo</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div className="navbar navbar-dark bg-dark mb-3">
			<div className="container">
				<a href="#" className="navbar-brand d-flex align-items-center">
					<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-camera me-3" viewBox="0 0 16 16">
						<path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
						<path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
					</svg>
					<strong>Album</strong>
				</a>
				<button 
					className="navbar-toggler collapsed"
					type="button" 
					data-bs-toggle="collapse"
					data-bs-target="#navbarHeader"
					aria-controls="navbarHeader"
					aria-expanded="false"
					aria-label="Alternar Navegacion"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
			</div>
		</div>
    </>
  )
}
