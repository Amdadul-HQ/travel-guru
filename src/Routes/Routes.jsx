import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Destination from "../Pages/Destination/Destination";
import Blog from "../Pages/Blog/Blog";
import Contract from "../Pages/Contract/Contract";
import Login from "../Pages/Login/Login";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/destination',
                element:<Destination/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/contract',
                element:<Contract/>
            },
            
        ]
    },
    {
        path:'/login',
        element:<Login/>
    }
])
