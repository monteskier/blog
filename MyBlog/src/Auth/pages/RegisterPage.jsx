import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout } from "../layouts/AuthLayout"
import {useForm} from '../../hooks'
import { useMemo, useState } from "react"
import { startCreatingUserWithEmailPassword } from "../../store/slices/auth";

const formData = {
  email:'',
  password:'',
  displayName:''
}
const formValidations = {
  email:[ (value) => value.includes('@'), 'El correu ha de tindre @'],
  password:[(value => value.length >=6 ), 'La contrasenya ha de tindre al menys 6 caracters'],
  displayName:[ (value) => value.length >=1 , 'El nom es obligatori'],  
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmited, setFormSubmited] = useState(false);
  const {displayNameValid, isFormValid, emailValid, passwordValid, formState, email, password, displayName, onInputChange } = useForm(formData, formValidations);
  const {status, errorMessage} =  useSelector( state => state.auth );

  const isCheckingAuthentication = useMemo( ()=> status === 'checking', [status]);

  const onSubmit=(e)=>{
    e.preventDefault();
    setFormSubmited(true);
    if(!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState))


  }
  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={onSubmit} action="" className='form login_form' method="post">
        <div className="row">
          <div className="col-12 col-md-6 form-group">
            <label className="form-label" htmlFor="nombre">Nombre</label>
            <input 
              type="text"
              className={ displayNameValid==null ? "form-control is-valid":"form-control is-invalid"}
              name="displayName" 
              id="displayName" 
              placeholder="Jonh Doe" 
              value={displayName}
              onChange={onInputChange}

              /> 

              
               { displayNameValid!==null && formSubmited && (
                <div id="validationDisplayNameFeedback" className="invalid-feedback">
                    {displayNameValid}
                </div>
               )}   
              
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="text" 
              className={ emailValid==null ? "form-control is-valid":"form-control is-invalid"}
              name="email" 
              id="email"
              value={email}
              placeholder={email}
              onChange={onInputChange}
            />   
              {emailValid!==null && formSubmited==true &&(
                <div id="emailNameFeedback" className="invalid-feedback">
                  {emailValid}
                </div>         
              )}
                    
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password" 
              className={ passwordValid==null ? "form-control is-valid":"form-control is-invalid"}
              id="password" 
              name="password"
              value={password}
              placeholder={password}
              onChange={onInputChange}
            />
            {passwordValid!==null && formSubmited ==true &&(
              <div id="validationpasswordFeedback" className="invalid-feedback">                
                {passwordValid}
              </div>
            )}

          </div>
        </div>
        <div className="row d-flex justify-content-center text-center align-content-center">
          <div className="col-6 w-100 mt-2 pa-3">
            <div className="alert-danger">{errorMessage}</div>
          </div>
          <div className="col-6 w-100 mt-2">
            <button disabled={isCheckingAuthentication} type="submit" className="btn btn-secondary login_btn_submit">CREAR CUENTA</button>
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
