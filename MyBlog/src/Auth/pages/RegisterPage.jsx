import { Link } from "react-router-dom"
import { AuthLayout } from "../layouts/AuthLayout"
import {useForm} from '../../hooks'

const formData = {
  email:'correo@gmail.com',
  password:'123456',
  displayName:'Jonh Doe'
}


export const RegisterPage = () => {

  const {formState, email, password, displayName, onInputChange } = useForm(formData);

  const onSubmit=(e)=>{
    e.preventDefault();
    console.log(formState);

  }
  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit} action="" className='form login_form' method="post">
        <div className="row">
          <div className="col-12 col-md-6 form-group">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input 
              type="text"
              className={ 2==2? "form-control is-valid":"form-control is-invalid"}
              name="displayName" 
              id="displayName" 
              placeholder="Jonh Doe" 
              value={displayName}
              onChange={onInputChange}

              /> 
                <div id="validationDisplayNameFeedback" className="invalid-feedback">
                  El nombre és obligatorio.
                </div>
              
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="text" 
              className="form-control" 
              name="email" 
              id="email"
              value={email}
              onChange={onInputChange}
            />            
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className="form-control" 
              id="password" 
              name="password"
              value={password}
              onChange={onInputChange}
            />
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
