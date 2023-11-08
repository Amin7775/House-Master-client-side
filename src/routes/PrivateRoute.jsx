import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <progress className="progress w-96"></progress>
    }
    if(user?.email){
        return children
    }


    return <Navigate state={location.pathname} to="/login" replace></Navigate>
};

export default PrivateRoute;