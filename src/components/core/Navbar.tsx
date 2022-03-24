import React from 'react'

const Navbar = () => {
  return (
    <nav
      className="
          flex w-full
          flex-wrap
          items-center
          justify-between
          bg-white
          py-4
          px-4
          text-lg text-gray-700
          md:py-0
        "
    >
      <div>
        <a href="#">
         Trippa Visor
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="menu-button"
        className="block h-6 w-6 cursor-pointer md:hidden"
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

      <div
        className="hidden w-full md:flex md:w-auto md:items-center"
        id="menu"
      >
        <ul
          className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
        >
          <li>
            <a className="block py-2 hover:text-purple-400 md:p-4" href="#">
              Features
            </a>
          </li>
          <li>
            <a className="block py-2 hover:text-purple-400 md:p-4" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="block py-2 hover:text-purple-400 md:p-4" href="#">
              Customers
            </a>
          </li>
          <li>
            <a className="block py-2 hover:text-purple-400 md:p-4" href="#">
              Blog
            </a>
          </li>
          <li>
            <a
              className="block py-2 text-purple-500 hover:text-purple-400 md:p-4"
              href="/signup"
            >
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
