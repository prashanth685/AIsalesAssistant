import React from "react";
import screen from "../assets/screen.png";

const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-surface/10 dark:bg-surface/10 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-3">
            <img src={screen} className="w-10 h-10 object-contain" alt="logo" />
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent font-extrabold text-2xl">
              SalesMind AI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md hover:text-primary transition-colors duration-300"
              href="#"
            >
              Home
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
              href="#"
            >
              Features
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
              href="#"
            >
              Pricing
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
              href="#"
            >
              Dashboard
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-300"
              href="#"
            >
              Contact
            </a>
          </div>
          <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-bold scale-95 active:scale-90 transition-transform">
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
