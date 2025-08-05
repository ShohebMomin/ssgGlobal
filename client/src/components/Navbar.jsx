import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon library
import SocialMediaIcons from "./SocialMediaIcons";
import { Link } from "react-router-dom";




export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        
        <div className="bg-customPurple flex p-4 text-white w-full justify-between items-center">
            <p className="text-xs ">Volunteer | Call Us: 12345 12345</p>
            <div id="social-media-icons" className="flex">
            <SocialMediaIcons/>
            </div>
        </div>
        <header className="bg-white shadow-md w-full">
            <div className="w-full py-3 max-w-6xl px-4 flex items-center">
                {/* Logo */}
                <div id='logo' className="h-20">
                <img  className="w-20" src="\src\assets\Images\logo.png" alt="logo" />
                </div>
                {/* Hamburger Icon (mobile) */}
                <button
                className="md:hidden text-purple-700 absolute right-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
                >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <button id="reserve-puja-btn" className="purple-btn right-10 px-4 w-36 py-1.5">Reserve Your Puja</button>
                {/* Menu items */}
                <nav className={`flex-col z-50 m-auto md:flex-row md:flex gap-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow md:shadow-none transition-all duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}>
                <ul id="navbar-elments" className="flex items-center gap-25 font-bold font-lato text-xl ">
                    <li id="home"><Link to="/">Home</Link></li>
                    <li id="about-us"><Link to="/about">About Us</Link></li>
                    <li id="about-puja"><Link to="/about-puja">About Puja</Link></li>
                    <li id="blog">Blog</li>
                    <li id="contact">Contact</li>
                </ul>
                </nav>
            </div>
        </header>
        
    </>
  );
}
