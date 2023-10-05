import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import About from "../Home/About";
import CardDetails from "../Card/CardDetails";
import Login from "../Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
       {
        path:'/',
        element:<Home></Home>
       },
       {
        path:'/about',
        element:<About></About>
       },
       {
        path:'/details/:id',
        loader:()=>fetch('/data.json'),
        element:<CardDetails></CardDetails>
       },
       {
        path:'/login',
        element:<Login></Login>
       }
      ]
    },
  ]);
  
  
 export default router 