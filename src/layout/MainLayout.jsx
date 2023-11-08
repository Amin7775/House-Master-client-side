import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar";
import Footer from "../components/Footer/Footer";
// import Navbar1 from "../components/Header/Navbar";
// import NavOne from "../components/Header/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
            {/* <Navbar></Navbar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;