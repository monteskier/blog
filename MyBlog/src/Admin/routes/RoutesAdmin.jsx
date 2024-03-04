import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardApp } from "../pages/DashboardApp"


export const RoutesAdmin = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardApp></DashboardApp>}></Route>
      <Route path='/*' element={<Navigate to='admin/'></Navigate>}></Route>
    </Routes>
  )
}
