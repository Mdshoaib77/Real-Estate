import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (showMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = originalOverflow || 'auto';
    }

    return () => {
      document.body.style.overflow = originalOverflow || 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo - Left */}
        <img src={assets.logo} alt="Logo" className="h-10 w-auto" />

        {/* Navigation - Center */}
        <div className="flex-1 flex justify-center">
          <ul className="hidden md:flex gap-7 text-white">
            <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
            <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
            <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
            <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
          </ul>
        </div>

        {/* Sign Up Button - Right */}
        <button className="bg-white text-black px-8 py-2 rounded-full hover:bg-gray-200 transition">
          Sign Up
        </button>

        {/* Mobile Menu Icon */}
        <img
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu Icon"
          onClick={() => setShowMobileMenu(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${showMobileMenu ? 'fixed w-full h-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all duration-300 z-20`}
      >
        <div className="flex justify-end p-6">
          <img
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close Menu"
            onClick={() => setShowMobileMenu(false)}
          />
        </div>

        <ul className="flex flex-col items-center gap-4 mt-10 px-5 text-lg font-medium text-black">
          <a  onClick={() => setShowMobileMenu(false)} href="#Header" className="px-4 py-2 rounded-full inline-block">Home</a>
          <a  onClick={() => setShowMobileMenu(false)} href="#About" className="px-4 py-2 rounded-full inline-block">About</a>
          <a  onClick={() => setShowMobileMenu(false)} href="#Projects" className="px-4 py-2 rounded-full inline-block">Projects</a>
          <a  onClick={() => setShowMobileMenu(false)} href="#Testimonials" className="px-4 py-2 rounded-full inline-block">Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
