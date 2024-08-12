// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './pages/Blogs';
import Bookmarks from './pages/Bookmarks';
import MainLayouts from './layouts/MainLayouts';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/blogs',
        element : <Blogs></Blogs>,
        loader : () => fetch('https://dev.to/api/articles?per_page=20&top=2')
      },
      {
        path : '/bookmarks',
        element : <Bookmarks></Bookmarks>
      }
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  // <StrictMode>
   <RouterProvider router={router} />
  // </StrictMode>,
)
