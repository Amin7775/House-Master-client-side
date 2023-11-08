import { SiHomebridge } from "react-icons/si";
import FooterTwo from "./FooterTwo";

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
</footer>
        <FooterTwo></FooterTwo>
        </div>
    );
};

export default Footer;