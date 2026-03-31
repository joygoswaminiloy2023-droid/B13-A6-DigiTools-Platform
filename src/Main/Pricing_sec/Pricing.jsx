import React from 'react';
import { Check } from "lucide-react";
const Pricing = () => {
    return (
      <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-900">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 mt-3 text-lg">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Starter Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-900">Starter</h3>
            <p className="text-gray-500 text-sm mt-1">Perfect for getting started</p>

            <div className="mt-8 mb-10">
              <span className="text-5xl font-bold text-gray-900">$0</span>
              <span className="text-gray-500 ml-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-12 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Access to 10 free tools
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Basic templates
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Community support
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> 1 project per month
              </li>
            </ul>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 rounded-2xl transition">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan - Most Popular */}
          <div className="bg-purple-600 text-white rounded-3xl p-8 relative shadow-2xl scale-105 border border-purple-400">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-5 py-1 rounded-full">
              Most Popular
            </div>

            <h3 className="text-xl font-semibold">Pro</h3>
            <p className="text-purple-200 text-sm mt-1">Best for professionals</p>

            <div className="mt-8 mb-10">
              <span className="text-5xl font-bold">$29</span>
              <span className="text-purple-200 ml-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-12 text-sm">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Access to all premium tools
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Unlimited templates
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Priority support
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Unlimited projects
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Cloud sync
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5" /> Advanced analytics
              </li>
            </ul>

            <button className="w-full bg-white text-purple-700 hover:bg-purple-100 font-semibold py-4 rounded-2xl transition">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-gray-900">Enterprise</h3>
            <p className="text-gray-500 text-sm mt-1">For teams and businesses</p>

            <div className="mt-8 mb-10">
              <span className="text-5xl font-bold text-gray-900">$99</span>
              <span className="text-gray-500 ml-1">/Month</span>
            </div>

            <ul className="space-y-4 mb-12 text-sm text-gray-600">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Everything in Pro
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Team collaboration
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Custom integrations
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Dedicated support
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> SLA guarantee
              </li>
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-500" /> Custom branding
              </li>
            </ul>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-4 rounded-2xl transition">
              Contact Sales
            </button>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Pricing;