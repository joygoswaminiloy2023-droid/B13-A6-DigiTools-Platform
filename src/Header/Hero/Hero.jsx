import React from 'react';
import hero from '../../assets/banner.png'
import { Play } from 'lucide-react';
const Hero = () => {
    return (
<div className="hero bg-white min-h-190 px-4 lg:px-40">
  <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">

    <div className="relative">
      <img src={hero} className="w-full max-w-lg rounded-2xl" />
    </div>

    <div className="text-center md:text-left">

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 border border-purple-100 mb-6">
        <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
        <span className="text-sm font-semibold">
          New: AI-Powered Tools Available
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-6">
        Supercharge Your <br />
        <span className="text-[#1A1A1A]">Digital Workflow</span>
      </h1>

      <p className="text-gray-500 text-lg mb-8 max-w-md">
        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
      </p>

      <div className="flex justify-center md:justify-start flex-wrap gap-4 ">

       <button className="btn transition-all duration-1000 bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6] border-none text-white px-8 rounded-full normal-case">
  Explore Products
</button>

        <button className="btn btn-outline border-purple-200 text-[#7C3AED] hover:bg-[#7C3AED] hover:text-white duration-700 px-8 rounded-full normal-case flex gap-2">

         <Play size="20"></Play>

          Watch Demo
        </button>

      </div>
    </div>

  </div>
</div>
    );
};

export default Hero;