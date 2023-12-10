import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Home, Login, Registro } from './Pages/index.js'
import store from './store/store.js'
import './index.css'


// de figma a code con uso de autoHTML | Developer Pluging 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>    
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Registro/>}/>
          <Route path = "/home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)