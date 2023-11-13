// import { RiHomeLine } from "react-icons/ri";
import { SiHomebridge } from "react-icons/si";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./navtwo.css"
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
// import axios from "axios";

const NavTwo = () => {

  const {logOut,user,photo} = useContext(AuthContext)
  const [image, setImage] = useState(null);
  useEffect(() => {
    setImage(photo);
  }, [photo]);

  // console.log(user, "from nav")
  const navigate = useNavigate()
  const handleLogout = () =>{

    logOut()
    .then(res => {
      Swal.fire({
        title: `Logout Success`,
        icon: "success"
      })
      .then(res=>{
        if(res.isConfirmed == true){
          navigate('/')
        }
      })
    })
    .catch(error=> console.log(error.message))
  }

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} className={"text-base font-semibold"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"} className={"text-base font-semibold"}>Services</NavLink>
      </li>
      {
        user?.email ?<li onClick={handleLogout} className={"text-base font-semibold h-full my-auto hover:bg-base-300 px-2 py-2 rounded-lg cursor-pointer"}>
        Logout
      </li> :<li>
        <NavLink to={"/login"} className={"text-base font-semibold"}>Login</NavLink>
      </li>
      }
      {/* {
        user?.email && <li onClick={handleLogout} className={"text-base font-semibold h-full my-auto hover:bg-base-300 px-2 py-2 rounded-lg cursor-pointer"}>
        Logout
      </li>
      } */}
      {
        user?.email && <li tabIndex={0}>
        <details>
            
          <summary className={"text-base font-semibold"}>Dashboard</summary>
          <ul className="p-2">
            <li>
              <NavLink to={"/myServices"} className={"text-base font-semibold"}>My services</NavLink>
            </li>
            <li>
              <NavLink to={"/dashboard/addService"} className={"text-base font-semibold"}>Add Services</NavLink>
            </li>
            <li>
              <NavLink to={"/mySchedules"} className={"text-base font-semibold"}>My schedules</NavLink>
            </li>
          </ul>
        </details>
      </li>
      }
      
    </>
  );
  return (
    // <SiHomebridge className="text-5xl"></SiHomebridge>
    //
    <div className="navbar bg-base-100 container mx-auto h-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52  font-medium my-auto bg-[#323233] text-white opacity-100"
            id="sidebar"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl py-1 h-full ">
          <Link to={'/'}>
          <div className="flex items-center">
            <SiHomebridge className="text-5xl"></SiHomebridge>
            <span className="self-center whitespace-nowrap text-3xl font-extrabold dark:text-white">
              <span className="text-[#009579] ml-2">House</span> Master
            </span>
          </div>
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex items-center" id="sidebar">
        <ul className="menu menu-horizontal px-1 my-auto z-[1]">{navLinks}</ul>
      </div>
      {/* user section */}
      <div className="navbar-end">
      {/* <div className="flex items-center gap-3">
          <p className="hidden md:block font-medium">Not Logged In</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-28 rounded-full">
                
              <img src={pic} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className=" z-[1]  shadow menu menu-sm dropdown-content bg-[#323233] rounded-box w-52 text-white"
            >
              <li className="hover:bg-white rounded-md">
                <a>Not Logged In</a>
              </li>
              
              <li className="hover:bg-white rounded-md">
              <Link to={'/login'}><button>Login</button></Link>
              </li>
            </ul>
          </div>
            
        </div> */}
        {
          user ? 
          <div className="flex items-center gap-3">
          <p className="hidden md:block font-medium text-black">{user.displayName}</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar dark:border-white dark:border-2">
            <div className="w-28 rounded-full">
            {image ? <img src={image} /> : <img src={user.photoURL} />}
                </div>
            </label>
            <ul
              tabIndex={0}
              className=" z-[1]  shadow menu menu-sm dropdown-content bg-[#323233] rounded-box w-52 text-white"
            >
              <li className="hover:bg-white rounded-md">
                <a>{user.displayName}</a>
              </li>
              <li className="hover:bg-white rounded-md">
                <a>{user.email}</a>
              </li>
              <li className="hover:bg-white rounded-md">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
            
        </div>
        :
          <div className="flex items-center gap-3">
          <p className="hidden md:block font-medium">Not Logged In</p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-28 rounded-full">
            <img src="https://i.ibb.co/RjNr5mp/speaker2.jpg" />
                </div>
            </label>
            <ul
              tabIndex={0}
              className=" z-[1]  shadow menu menu-sm dropdown-content bg-[#323233] rounded-box w-52 text-white"
            >
              <li className="hover:bg-white rounded-md">
                <a>No User Found</a>
              </li>
              
              <li className="hover:bg-white rounded-md">
              <Link to={'/login'}><button>Login</button></Link>
              </li>
            </ul>
          </div>
            
        </div>
        }
      </div>
    </div>
  );
};

export default NavTwo;
