import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
       {
        path:'/',
        element:<div>Home Page</div>
       }
      ]
    },
  ]);
  
  
 export default router 