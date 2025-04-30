import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { Router } from './Router/Router';
import MainLayout from './MainLayout/Layout';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* if any time need router  */}
    {/* <RouterProvider router={Router}></RouterProvider> */}
    <MainLayout />
  </StrictMode>,
)
