import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom'
import { AuthLayout } from "../layouts/AuthLayout"
import { useForm } from '../../hooks/useForm'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/slices/auth';

const formData = {
  email:'',
  password:''
}
export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth)
  const {email, password, onInputChange, formState} = useForm(formData);

  const isAuthenticating = useMemo( ()=>status === 'checking', [status]);

  const onSubmit = (e)=>{
    e.preventDefault();  
    if(email.length< 1 && password.length < 1 ) return;
    dispatch(startLoginWithEmailPassword({email, password}));
  }

  const onGoogleSignIn = ()=>{
    console.log('onGoogleSignIn');
    dispatch( startGoogleSignIn() );
  }

  

  return (
    <AuthLayout title='Login'>
      <form onSubmit={onSubmit} action="" className='form login_form' method="post">
        <div className="row">
          <div className="col-12 form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              type="text"
              className="form-control"
              value={email}
              name="email"
              id="email"
              onChange={onInputChange} />            
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input 
              type="password"
              className="form-control"
              value={password}  
              onChange={onInputChange} 
              id="password" 
              name="password" />
          </div>
        </div>
        <div className="row d-flex justify-content-between align-content-center">
          
          <div className="col-12 mt-2">
            <div className="alert-danger">{errorMessage}</div>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <button
              disabled={isAuthenticating}               
              type="submit"
              className="btn btn-secondary login_btn_submit"
              >Login
            </button>
          </div>
          <div className="col-12 col-md-6 mt-2">
            <div className="d-flex align-items-center">
              <button
                disabled={isAuthenticating}
                type='button'
                onClick={onGoogleSignIn}
                className="btn btn-secondary login_btn_submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
              </svg> 
                <span className="ms-2">
                  Entra con Goolge
                </span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="row d-flex justify-content-end my-3">
        <div className="col-12 text-end">
          <Link to='/auth/register'>Crear una cuenta</Link>
        </div>
      </div>
    </AuthLayout>

  )
}
