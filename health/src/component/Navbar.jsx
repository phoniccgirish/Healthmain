import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Body from "./pages/Body";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function Navbar() {
  return (
    <>
      <BrowserRouter>
        <nav className='fixed top-0 left-0 right-0 h-16 bg-gray-900 text-white flex items-center px-6  shadow-lg'>
          <div className='flex items-center space-x-4'>
            <h1 className='text-xl font-bold'>Your App</h1>
            <div className='hidden md:flex space-x-6 pl-250'>
              <Link to='/' className='hover:text-gray-300'>
                Home
              </Link>
              <Link to='/about' className='hover:text-gray-300'>
                About
              </Link>
              <Link to='/contact' className='hover:text-gray-300'>
                Contact
              </Link>
              <Link to='/body' className='hover:text-gray-300'>
                3D View
              </Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/body' element={<Body />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
