import React from "react";

const Navbar = () => {
  return (
    <>
      
      <div className="navbar fixed top-0 z-50 bg-white shadow-md">
        {/* Left */}
        <div className="navbar-start">
          {/* Mobile Hamburger */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52"
            >
              <li>
                <a className="hover:text-blue-500">Item 1</a>
              </li>
              <li>
                <a className="hover:text-blue-500 ">Item 2</a>
              </li>
              <li>
                <a className="hover:text-blue-500 ">Item 3</a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <a className="btn btn-ghost text-xl text-blue-500 hover:text-blue-600">
            Syntax Innovations
          </a>
        </div>

        {/* Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-white">
            <li>
              <a className="hover:text-blue-500 ">
                Item 1
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 ">
                Item 2
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 ">
                Item 3
              </a>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="navbar-end">
          <a className="btn btn-primary hover:bg-blue-600">
            Get Started
          </a>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-16 bg-white"></div>
    </>
  );
};

export default Navbar;
