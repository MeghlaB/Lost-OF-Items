import {
    createBrowserRouter,
   
  } from "react-router-dom";
 

import Layout from "../MainLayout/Layout";
import Home from "../Pages/Home";
import LostofItems from "../Pages/LostofItems";
import Register from "../Pages/Register";
import LoginPage from "../Pages/LoginPage";
import AddLost_FoundITems from "../PrivetRoute/AddLost_FoundITems";
import DetailsPages from "../PrivetRoute/DetailsPages";
import PrivetRoute from "../PrivetRoute/Privet";
import Myitems from "../PrivetRoute/Myitems";
import UpdatePost from "../PrivetRoute/UpdatePost";
import DelatePost from "../PrivetRoute/DelatePost";
import Allrecovery from "../PrivetRoute/Allrecovery";
import ErrorPage from "../Pages/ErrorPage";
import ScrollToTopOnMount from "../Components/ScrollComponent";
import AboutUs from "../Pages/AboutUs";

  
const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/allItems',
            element:<LostofItems></LostofItems>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/login',
          element:<LoginPage></LoginPage>
        },
        {
          path:'/addItems',
          element:<PrivetRoute><AddLost_FoundITems></AddLost_FoundITems></PrivetRoute>
        },
        {
          path:'/myItems',
          element:<PrivetRoute><Myitems></Myitems></PrivetRoute>
        },
        {
          path:'/updatePost/:id',
          element:<PrivetRoute><UpdatePost></UpdatePost></PrivetRoute>,
          loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/items/${params.id}`)

        },
        {
          path:'/allrecovere',
          element:<PrivetRoute><Allrecovery></Allrecovery></PrivetRoute>
        }
        ,
        {
          
          path:'/details/:id',
          element:<PrivetRoute>
            <ScrollToTopOnMount></ScrollToTopOnMount>
            <DetailsPages></DetailsPages>
            </PrivetRoute>
        },
        {
          path:'about',
          element:<AboutUs></AboutUs>
        }
      ]
    },
  ]);

  export default router