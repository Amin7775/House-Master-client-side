import { SiHomebridge } from "react-icons/si";
import FooterTwo from "./FooterTwo";
import { FaFacebook, FaLinkedinIn, FaPinterest, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className=" mx-auto bg-[#323233] border-t-8 border-yellow-300">
            <footer className="footer p-10 text-white  container mx-auto">
  <aside className="h-full my-auto pt-10">
  <SiHomebridge className="text-7xl text-center w-full text-yellow-300"></SiHomebridge>
    <p className="text-center"><span className="text-2xl font-medium"><span className="">House</span> Master</span><br/>Providing reliable home exchange services since 2001</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <header className="footer-title">Social</header>
    <div className="grid grid-cols-3 text-xl gap-2 pr-3 md:pr-0">
          <FaTwitter className="cursor-pointer"></FaTwitter>
          <FaFacebook className="cursor-pointer"></FaFacebook>
          {/* <FaWhatsapp className="cursor-pointer"></FaWhatsapp> */}
          <FaPinterest className="cursor-pointer"></FaPinterest>
          <FaYoutube className="cursor-pointer"></FaYoutube>
          <FaReddit className="cursor-pointer"></FaReddit>
          <FaLinkedinIn></FaLinkedinIn>
        </div>
  </nav>
</footer>
        <FooterTwo></FooterTwo>
        </div>
    );
};

export default Footer;