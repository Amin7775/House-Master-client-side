import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";
import SingleService from "../pages/SingleService/SingleService";
import Myservices from "../pages/MyServices/Myservices";
import UpdateService from "../pages/UpdateServices/UpdateService";
import MySchedules from "../pages/MySchedules/MySchedules";
// import ErrorPage from "../pages/error/error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement:<ErrorPage></ErrorPage>,
        children:([
            {
                path:'/',
                element: <Home></Home>,
                loader: ()=>fetch('http://localhost:5000/services/home')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/dashboard/addService',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/services',
                element: <Services></Services>
            },
            {
                path:'/services/:id',
                element: <PrivateRoute><SingleService></SingleService></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/myservices',
                element: <PrivateRoute><Myservices></Myservices></PrivateRoute>,
            },
            {
                path:'/updateService/:id',
                element:<PrivateRoute><UpdateService></UpdateService></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'mySchedules',
                element:<PrivateRoute><MySchedules></MySchedules></PrivateRoute>,
               
            }
        ])
      },
])

export default router