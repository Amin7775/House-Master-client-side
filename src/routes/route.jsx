import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddService from "../pages/AddService/AddService";
import PrivateRoute from "./PrivateRoute";
import Services from "../pages/Services/Services";
import SingleService from "../pages/SingleService/SingleService";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:([
            {
                path:'/',
                element: <Home></Home>
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
                element: <SingleService></SingleService>,
                loader: ({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ])
      },
])

export default router