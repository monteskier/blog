import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouterApp } from './RouterApp'
import 'animate.css'
import './styles.css'
import { Provider } from 'react-redux'
import {store} from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <RouterApp />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
