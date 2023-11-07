import { IoIosCall } from "react-icons/io";
import { ImClock } from "react-icons/im";
import { FaFacebook,FaPinterest, FaTwitter, FaYoutube, FaReddit } from "react-icons/fa";
import NavTwo from "./NavTwo";


const NavBar = () => {
  return (
    <div className="w-full bg-[#323233] h-16 relative">
      <div className="container mx-auto text-white flex justify-between py-2">
        {/* nav section 1- phone and time */}
        <div className="flex items-center gap-5">
          {/* phone */}
          <div className="flex items-center">
            <IoIosCall className="text-xl mr-0 mt-1"></IoIosCall>
            <p className="text-sm">+01832348474</p>
          </div>
          <div>
            <p>|</p>
          </div>
          {/* Time */}
          {/* phone */}
          <div className="flex items-center gap-2">
            <ImClock className=""></ImClock>
            <p className="text-sm">
              Sun - Thu 08:00 - 20:00 / Closed on Weekends
            </p>
          </div>
        </div>
        {/* nav section 2- Icons */}
        <div className="flex text-xl gap-1">
          <FaTwitter className="cursor-pointer"></FaTwitter>
          <FaFacebook className="cursor-pointer"></FaFacebook>
          {/* <FaWhatsapp className="cursor-pointer"></FaWhatsapp> */}
          <FaPinterest className="cursor-pointer"></FaPinterest>
          <FaYoutube className="cursor-pointer"></FaYoutube>
          <FaReddit className="cursor-pointer"></FaReddit>
        </div>
      </div>
      <div>
        <NavTwo></NavTwo>
      </div>
    </div>
  );
};

export default NavBar;
