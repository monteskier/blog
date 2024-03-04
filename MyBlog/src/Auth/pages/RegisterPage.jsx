import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"


export const RegisterPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form action="" className='form login_form' method="post">
        <div className="row">
          <div className="col-6 form-group">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input type="text" className="form-control" name="nombre" id="nombre" placeholder="Jonh Doe" /> 
            <label className="form-label" htmlFor="email">Email</label>
            <input type="text" className="form-control" name="email" id="email" />            
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" name="password" />
          </div>
        </div>
        <div className="row d-flex justify-content-center text-center align-content-center">
          <div className="col-10 w-100 mt-2">
            <button type="submit" className="btn btn-secondary login_btn_submit">CREAR CUENTA</button>
          </div>
        </div>
      </form>
      <div className="row d-flex justify-content-end my-3">
        <div className="col-12 text-end">
          <Link to='/auth/login'>Ya estas registrado?</Link>
        </div>
      </div>
    </AuthLayout>

  )
}
