import { RiHomeLine } from "react-icons/ri";
import { SiHomebridge } from "react-icons/si";
import { NavLink } from "react-router-dom";
import "./navtwo.css"

const NavTwo = () => {

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"} className={"text-base font-semibold"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/services"} className={"text-base font-semibold"}>Services</NavLink>
      </li>
      <li>
        <NavLink to={"/login"} className={"text-base font-semibold"}>Login</NavLink>
      </li>
      <li>
        <NavLink to={"/logout"} className={"text-base font-semibold"}>Logout</NavLink>
      </li>
      <li tabIndex={0}>
        <details>
            
          <summary className={"text-base font-semibold"}>Dashboard</summary>
          <ul className="p-2">
            <li>
              <NavLink to={"/myServices"} className={"text-base font-semibold"}>My services</NavLink>
            </li>
            <li>
              <NavLink to={"/addServices"} className={"text-base font-semibold"}>Add Services</NavLink>
            </li>
            <li>
              <NavLink to={"/mySchedules"} className={"text-base font-semibold"}>My schedules</NavLink>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    // <SiHomebridge className="text-5xl"></SiHomebridge>
    //
    <div className="navbar bg-base-100 container mx-auto border-2 border-red-300 h-24">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 text-lg font-medium my-auto"
            id="sidebar"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl py-1 h-full ">
          <div className="flex items-center">
            <SiHomebridge className="text-5xl"></SiHomebridge>
            <span className="self-center whitespace-nowrap text-3xl font-extrabold dark:text-white">
              <span className="text-[#009579] ml-2">House</span> Master
            </span>
          </div>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex items-center" id="sidebar">
        <ul className="menu menu-horizontal px-1 my-auto">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default NavTwo;
