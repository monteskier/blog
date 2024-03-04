import { Route, Routes } from "react-router-dom"
import { MyBlogApp } from "../MyBlogApp"


export const RoutesMyBlogApp = () => {
  return (
    <Routes>
      <Route path='/' element={<MyBlogApp></MyBlogApp>} />
    </Routes>
  )
}
