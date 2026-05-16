import React from "react";
import screen from "../assets/screen.png";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative overflow-hidden bg-[#070B14] border-t border-white/10"
      id="contact"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[2px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0B1220] rounded-2xl flex items-center justify-center">
                  <img
                    src={screen}
                    alt="SalesMind AI"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white">SalesMind AI</h2>
                <p className="text-sm text-cyan-400">AI Sales Automation</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed max-w-md">
              Empowering modern sales teams with intelligent automation,
              predictive insights, and AI-driven engagement tools that scale
              revenue faster.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-8">
              {[FaTwitter, FaLinkedinIn, FaGithub, FaInstagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ),
              )}
            </div>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Product</h4>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/feature"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/feature"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  to="/feature"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  to="/feature"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  API Docs
                </Link>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Status
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Legal</h4>

            <ul className="space-y-4">
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-slate-400 hover:text-cyan-400 transition"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="mt-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-slate-400">
              Get the latest AI sales insights and product updates.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#0B1220] border border-white/10 text-white placeholder:text-slate-500 rounded-xl px-5 py-3 outline-none focus:border-cyan-400 w-full sm:w-[300px]"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} SalesMind AI. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/contact" className="text-slate-500 hover:text-cyan-400">
              Privacy
            </Link>
            <Link to="/contact" className="text-slate-500 hover:text-cyan-400">
              Terms
            </Link>
            <Link to="/contact" className="text-slate-500 hover:text-cyan-400">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
