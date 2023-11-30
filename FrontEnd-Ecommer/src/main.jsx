import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home, Login } from './Pages/index.js'
import store from './store/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>    
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login/>}/>
          <Route path = "/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)