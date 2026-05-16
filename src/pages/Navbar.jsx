import React, { useState } from "react";
import screen from "../assets/screen.png";
import Login from "../Components/Login";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#070B14]/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={screen} className="w-10 h-10 object-contain" alt="logo" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent font-extrabold text-xl md:text-2xl">
              SalesMind AI
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-300 hover:text-cyan-400">
              Home
            </a>
            <a href="#features" className="text-slate-300 hover:text-cyan-400">
              Features
            </a>
            <a href="#contact" className="text-slate-300 hover:text-cyan-400">
              Contact
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => setShowLogin(true)}
              className="px-6 py-2.5 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              Login
            </button>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#070B14] border-t border-white/10 flex flex-col items-start px-6 py-6 gap-5">
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Features
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-slate-300 hover:text-cyan-400"
            >
              Contact
            </a>

            <button
              onClick={() => {
                setShowLogin(true);
                setMenuOpen(false);
              }}
              className="w-full mt-2 px-6 py-3 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              Login
            </button>
          </div>
        )}
      </nav>

      {/* LOGIN MODAL */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div
            className="absolute inset-0"
            onClick={() => setShowLogin(false)}
          />

          <div className="relative z-10">
            <Login onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
