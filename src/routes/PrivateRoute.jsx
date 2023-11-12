import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import spinner from "../assets/LottieFiles/LoadingSpinner.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-[50vh] container mx-auto flex items-center justify-center bg-[#fbfbfa]">
        <Lottie className="h-32" animationData={spinner} speed={0.5}></Lottie>
      </div>
    );
  }
  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace></Navigate>;
};

export default PrivateRoute;
