import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Body from "./pages/Body";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className='fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-600 text-white flex items-center justify-between px-6 shadow-lg backdrop-blur-lg z-50'>
        {/* Logo */}
        <h1 className='text-2xl font-extrabold tracking-wide cursor-pointer'>
          Heathchef
        </h1>

        {/* Desktop Links */}
        <div className='hidden md:flex space-x-8 font-medium'>
          <Link to='/' className='hover:text-yellow-300 transition'>
            Home
          </Link>
          <Link to='/about' className='hover:text-yellow-300 transition'>
            About
          </Link>
          <Link to='/contact' className='hover:text-yellow-300 transition'>
            Contact
          </Link>
          <Link to='/body' className='hover:text-yellow-300 transition'>
            3D View
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col space-y-1 focus:outline-none'
          onClick={() => setOpen(!open)}
        >
          <span className='w-6 h-0.5 bg-white'></span>
          <span className='w-6 h-0.5 bg-white'></span>
          <span className='w-6 h-0.5 bg-white'></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className='md:hidden absolute top-16 left-0 right-0 bg-gray-900 bg-opacity-95 text-white flex flex-col items-center py-6 space-y-6 z-40'>
          <Link
            to='/'
            onClick={() => setOpen(false)}
            className='hover:text-yellow-300'
          >
            Home
          </Link>
          <Link
            to='/about'
            onClick={() => setOpen(false)}
            className='hover:text-yellow-300'
          >
            About
          </Link>
          <Link
            to='/contact'
            onClick={() => setOpen(false)}
            className='hover:text-yellow-300'
          >
            Contact
          </Link>
          <Link
            to='/body'
            onClick={() => setOpen(false)}
            className='hover:text-yellow-300'
          >
            3D View
          </Link>
        </div>
      )}

      {/* Routes */}
      <div className='pt-16'>
        {" "}
        {/* Push content below navbar */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/body' element={<Body />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
