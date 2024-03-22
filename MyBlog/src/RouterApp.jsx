import { RoutesMyBlogApp } from "./Blog/routes/RoutesMyBlogApp"
// import { RoutesAdmin } from './Admin/routes/RoutesAdmin'
import { AuthRouter } from "./Auth/routes/AuthRouter"
import { RoutesAdmin } from "./Admin/routes/RoutesAdmin"
import { CheckingAuth } from './ui';
import { useCheckAuth } from './hooks';
import { Routes, Route, Navigate } from "react-router-dom";


export const RouterApp = () => {

  const status = useCheckAuth();

  if(status==='checking'){
    return <CheckingAuth></CheckingAuth>
  }


  return (    
    <Routes>
      {
        status === 'authenticated'
        ?<>
          <Route path='/admin/*' element={<RoutesAdmin></RoutesAdmin>}></Route>
          <Route path='/*' element={<RoutesMyBlogApp />}></Route>          
          <Route path='/auth/*' element={<Navigate to='/admin'></Navigate>} />
        </>
        :<>          
          <Route path='/*' element={<RoutesMyBlogApp />} />
          <Route path='/auth/*' element={<AuthRouter/>} />
          <Route path='/' element={<Navigate to='/*'></Navigate>}></Route>
        </>
      }
      <Route path='/*' element={<Navigate to='/*'></Navigate>}></Route>
      {/* <Route path='/*' element={<RoutesMyBlogApp />} /> */}
      {/* <Route path='/auth/*' element={<AuthRouter/>} /> */}
      {/* <Route path='/admin/*' element={<RoutesAdmin></RoutesAdmin>}></Route> */}
    </Routes>
    
  )
}
