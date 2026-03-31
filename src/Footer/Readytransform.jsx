import { Dot } from 'lucide-react';
import React from 'react';

const Readytransform = () => {
    return (
<div className="bg-linear-to-br from-[#4F39F6]  to-[#9514FA] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Heading */}
        <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight mb-6">
          Ready To Transform Your Workflow?
        </h2>

        {/* Subheading */}
        <p className="text-purple-100 text-md md:text-xl max-w-2xl mx-auto mb-10">
          Join thousands of professionals who are already using DigiTools to work smarter. 
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-purple-700 hover:bg-gray-100 transition px-8 py-4 rounded-2xl font-semibold text-lg">
            Explore Products
          </button>
          
          <button className="border border-white/70 hover:bg-white/10 text-white transition px-8 py-4 rounded-2xl font-semibold text-lg">
            View Pricing
          </button>
        </div>

        {/* Trust Text */}
        <p className="text-purple-200 text-sm mt-8 flex items-center justify-center gap-2">
   
          14-day free trial <Dot></Dot> No credit card required <Dot></Dot> Cancel anytime
        </p>
      </div>
    </div>
  );
    
};

export default Readytransform;