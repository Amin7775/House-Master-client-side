import { SiHomebridge } from "react-icons/si";

import {
  FaFacebook,
  FaLinkedinIn,
  FaPinterest,
  FaReddit,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 t bg-[#323233] border-t-8 border-yellow-300 text-white  rounded ">
      <SiHomebridge className="text-8xl text-center w-full text-yellow-300 "></SiHomebridge>
      <p className="text-3xl font-medium  inline-block mt-[-20px]">
        <span className="inline-block">House</span> Master
      </p>

      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Reviews</a>
      </nav>
      <nav>
        <header className="footer-title">Social</header>
        <div className="flex gap-3 w-full">
          <FaTwitter className="cursor-pointer text-xl"></FaTwitter>
          <FaFacebook className="cursor-pointer text-xl"></FaFacebook>
          {/* <FaWhatsapp className="cursor-pointer"></FaWhatsapp> */}
          <FaPinterest className="cursor-pointer text-xl"></FaPinterest>
          <FaYoutube className="cursor-pointer text-xl"></FaYoutube>
          <FaReddit className="cursor-pointer text-xl"></FaReddit>
          <FaLinkedinIn className="cursor-pointer text-xl"></FaLinkedinIn>
        </div>
      </nav>
      <aside>
        <p>Copyright © 2023 - All right reserved by House Master Ltd.</p>
      </aside>
    </footer>
  );
};

export default Footer;
