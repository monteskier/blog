import { Navigate, Route, Routes } from "react-router-dom"
import { DashboardApp } from "../pages/DashboardApp"
import { SelectedPostsPage } from "../pages/SelectedPostsPage"


export const RoutesAdmin = () => {
  return (
    <Routes>
      <Route path='/' element={<DashboardApp></DashboardApp>}></Route>
      <Route path='selectedPostPage/' element={<SelectedPostsPage></SelectedPostsPage>}></Route>
      <Route path='/*' element={<Navigate to='admin/'></Navigate>}></Route>
    </Routes>
  )
}
