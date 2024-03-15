import { store } from './store'
import { Provider } from 'react-redux'
import { Route,Routes } from "react-router-dom"
import { RoutesMyBlogApp } from "./Blog/routes/RoutesMyBlogApp"
// import { RoutesAdmin } from './Admin/routes/RoutesAdmin'
import { AuthRouter } from "./Auth/routes/AuthRouter"
import { RoutesAdmin } from "./Admin/routes/RoutesAdmin"

export const RouterApp = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/*' element={<RoutesMyBlogApp />} />
        <Route path='/auth/*' element={<AuthRouter/>} />
        <Route path='/admin/*' element={<RoutesAdmin></RoutesAdmin>}></Route>
      </Routes>
    </Provider>
  )
}
