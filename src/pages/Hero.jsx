import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] min-h-screen">
      {/* Background Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-cyan-400/30 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-violet-600/30 blur-[140px] rounded-full"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-xl mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>

              <span className="text-cyan-300 uppercase tracking-[0.2em] text-xs font-semibold">
                Next-Gen Sales Intelligence
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-white">
              AI-Powered
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Sales Automation
              </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">
              Revolutionize your sales cycle with intelligent automation.
              Generate high-converting outreach, discover high-intent leads, and
              accelerate pipeline growth with frontier AI technology.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">
              <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold flex items-center gap-3 shadow-[0_0_40px_rgba(0,240,255,0.25)] hover:scale-105 transition-all duration-300">
                Start Free Trial
                <IoArrowForwardCircle className="text-2xl group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white font-semibold flex items-center gap-3 hover:bg-white/10 transition-all duration-300">
                <FaPlayCircle className="text-cyan-400 text-xl" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14">
              <div>
                <h3 className="text-3xl font-bold text-white">3x</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Faster Deal Closing
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">84%</h3>
                <p className="text-gray-400 text-sm mt-1">Lead Conversion</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-white">12k+</h3>
                <p className="text-gray-400 text-sm mt-1">Leads Generated</p>
              </div>
            </div>
          </div>

          {/* RIGHT DASHBOARD */}
          <div className="relative">
            {/* Floating Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl"></div>

            <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 shadow-2xl">
              {/* Top Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                <div className="text-sm tracking-widest uppercase text-gray-400">
                  SalesMind Dashboard
                </div>
              </div>

              {/* Cards */}
              <div className="grid grid-cols-2 gap-5">
                {/* Chart Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <div className="text-sm text-gray-400 mb-5">
                    Pipeline Growth
                  </div>

                  <div className="flex items-end gap-2 h-32">
                    <div className="w-full h-[35%] rounded-t-xl bg-cyan-400/20"></div>
                    <div className="w-full h-[50%] rounded-t-xl bg-cyan-400/40"></div>
                    <div className="w-full h-[75%] rounded-t-xl bg-cyan-400/60"></div>
                    <div className="w-full h-[95%] rounded-t-xl bg-gradient-to-t from-cyan-400 to-blue-500 shadow-[0_0_20px_rgba(0,240,255,0.5)]"></div>
                  </div>
                </div>

                {/* Metric Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-center items-center text-center">
                  <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    84%
                  </h2>

                  <p className="text-gray-400 text-sm mt-3">Lead Conversion</p>
                </div>
              </div>

              {/* AI Agent Box */}
              <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-400/20 rounded-2xl p-5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center shadow-lg">
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      SalesMind AI Agent
                    </h4>

                    <p className="text-sm text-gray-400">
                      Real-time automation assistant
                    </p>
                  </div>
                </div>

                <div className="bg-black/30 border border-white/5 rounded-xl p-4 text-gray-300 italic leading-relaxed">
                  “I’ve identified 12 high-intent SaaS leads and generated
                  personalized outreach campaigns with a projected 37% response
                  rate.”
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
