import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"


export const AuthRouter = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage></LoginPage>}/>
      <Route path='register' element={<RegisterPage></RegisterPage>} />
      <Route path='/*' element={<Navigate to='/auth/login'></Navigate>}></Route>
    </Routes>
  )
}
