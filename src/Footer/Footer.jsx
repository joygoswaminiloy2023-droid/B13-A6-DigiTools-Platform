import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (

    <footer className="bg-[#101727] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-12 gap-10 border-b border-gray-800 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5">
            <h2 className="text-2xl font-semibold tracking-tight">DigiTools</h2>
            <p className="mt-4 text-gray-400 leading-relaxed max-w-md">
              Premium digital tools for creators, professionals, and businesses. 
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2">
            <h4 className="font-medium text-sm uppercase tracking-widest text-gray-500 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Features</a></li>
              <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition">Templates</a></li>
              <li><a href="#" className="hover:text-white transition">Integrations</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-2">
            <h4 className="font-medium text-sm uppercase tracking-widest text-gray-500 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Blog</a></li>
              <li><a href="#" className="hover:text-white transition">Careers</a></li>
              <li><a href="#" className="hover:text-white transition">Press</a></li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-3">
            <h4 className="font-medium text-sm uppercase tracking-widest text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition">Community</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

        </div>

        {/* Social Links & Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyright */}
          <div className="text-sm text-gray-500">
            © 2026 DigiTools. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
             <FaTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
             <FaInstagram size={20} />
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
};


export default Footer;