import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';
import Login from './login'; // Ensure you have the correct import path

const Navbar = () => {
  const [authUser] = useAuth();  
  const [sticky, setSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Study Materials</Link></li>
      <li><Link to="/Labmanuals">Lab Manuals</Link></li>
      <li><Link to="/Modelpapper">Model Pappers</Link></li>
    </>
  );

  const openModal = () => {
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <nav className={`bg-[#1f2937] text-white max-w-full container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50
        ${sticky ? "shadow-md transition-all duration-300 ease-in-out" : ""}`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1f2937] text-white rounded-box z-[1] mt-3 max-w-[50vw] w-56 p-2 shadow">
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold cursor-pointer mr-20">Book Store</a>
        </div>
        <div className="navbar-end">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>
          {
            authUser ? <Logout /> : (
              <button
                className="btn w-15 h-8 ml-20 sm:ml-6 md:ml-9 bg-black text-white rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                onClick={openModal} // Use the openModal function
              >
                Login
              </button>
            )
          }
        </div>
      </div>
      
      {/* Render Login modal conditionally */}
      {isModalOpen && <Login onLoginSuccess={closeModal} />} {/* Pass closeModal to Login */}
    </nav>
  );
};

export default Navbar;
