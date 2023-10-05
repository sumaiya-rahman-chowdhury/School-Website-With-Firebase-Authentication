import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../Home/Home";
import About from "../Home/About";
import CardDetails from "../Card/CardDetails";
import Login from "../Login/Login";
import Registration from "../Login/Registration/Registration";
import ProtectRouter from "../User Profile/ProtectRouter";
import Profile from "../User Profile/Profile";


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
       },
       {
        path:'/registration',
        element:<Registration></Registration>
       },
       {
        path:'/profile',
        element:<ProtectRouter><Profile></Profile></ProtectRouter>
       }
      ]
    },
  ]);
  
  
 export default router 