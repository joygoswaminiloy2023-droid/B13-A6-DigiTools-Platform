import React from 'react';
import logo from '../../assets/logo.png'
import { ShoppingCart } from 'lucide-react';



const Nav = ({selectedplans}) => {
    return (
 <div className="bg-base-100 shadow-sm">
  <div className="navbar max-w-7xl mx-auto px-4">
    
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>

        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>Products</a></li>
          <li><a>Features</a></li>
          <li><a>Pricing</a></li>
          <li><a>Testimonials</a></li>
          <li><a>FAQ</a></li>
        </ul>
      </div>

   <img src={logo} alt="logo" className="h-6 sm:h-8 md:h-10 w-auto" />
    </div>

    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
        <li><a>Login</a></li>
      </ul>
    </div>

 <div className="navbar-end gap-4">
  
  <div className="relative">
    <ShoppingCart size={20} />

   
      <span className={`${selectedplans.length===0 && "hidden"} absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full`}>
        {selectedplans.length}
      </span>
    
  </div>

  <a className="hidden md:block">Login</a>

  <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-5 rounded-2xl">
    Get Started
  </a>
</div>

  </div>
</div>
    );
};

export default Nav;