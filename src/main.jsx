import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, } from "react-router-dom"
import './index.css'
import router from './Component/Root/Root'
import Authentication from './Component/Context/Authentication'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authentication>
      <RouterProvider router={router}>

      </RouterProvider>
    </Authentication>
  </React.StrictMode>,
)
