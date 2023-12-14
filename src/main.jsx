import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './Layout/HomePage/HomePage.jsx'
import Home from './Pages/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
    children:[
      {
        path:'/',
        element : <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
