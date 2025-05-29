import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/root/Root.jsx';

import Applied from './components/applied/Applied.jsx';
import Statictics from './components/statistics/Statictics.jsx';
import Blogs from './components/blogs/Blogs.jsx';
import ErrorPage from './components/errorpage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage> ,
    children: [
      {
        path: '/',
        element: <Statictics></Statictics>
      },
      {
        path: '/applied',
        element: <Applied></Applied>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
