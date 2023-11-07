import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
// import Navbar1 from "../components/Header/Navbar";
// import NavOne from "../components/Header/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;