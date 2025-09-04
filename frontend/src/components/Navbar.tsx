import { Link, NavLink } from "react-router-dom";
import Container from "./container";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  return (
      <Container>
        <div className="flex items-center py-5 justify-between font-medium">
          <Link to="/">
            <img
              src="/images/logo.png"
              className="w-36 cursor-pointer"
              alt="logo"
            />
          </Link>
          <ul className="hidden gap-5 text-gray-700 sm:flex">
            <Link to="/">Home</Link>
            <Link to="/collection">Collection</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </ul>
          <div className="flex gap-6 items-center">
            <Link to="#">
              <img
                src="/images/search.png"
                className="w-5 cursor-pointer"
                alt="search-icon"
              />
            </Link>
            <Link to="#">
              <img
                src="/images/login.png"
                className="w-5 cursor-pointer"
                alt="login-icon"
              />
            </Link>
            <Link to="#" className="relative">
              <img
                src="/images/cart.png"
                className="w-5 cursor-pointer"
                alt="cart-icon"
              />
              <p className="rounded-full w-4 h-4 bg-black text-white leading-4 text-[0.5rem] text-center absolute bottom-[-0.313rem] right-[-0.313rem]">
                1
              </p>
            </Link>
            <img
              src="/images/menu.png"
              className="w-5 cursor-pointer sm:hidden"
              alt="menu-icon"
              onClick={() => setisMenuOpen(true)}
            />
          </div>
          <div
            className={`absolute sm:hidden top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
              isMenuOpen ? "w-full" : "w-0"
            }`}
          >
            <div className="flex flex-col text-gray-600">
              <Link to="/">
                <div
                  className="flex items-center cursor-pointer gap-4 p-3"
                  onClick={() => setisMenuOpen(false)}
                >
                  <img
                    src="/images/back-arrow.png"
                    className="rotate-180 h-4"
                    alt="back-arrow"
                  />
                  <p>Back</p>
                </div>
              </Link>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `py-2 pl-6 border border-gray-200 uppercase ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
                onClick={() => setisMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/collection"
                className={({ isActive }) =>
                  `py-2 pl-6 border border-gray-200 uppercase ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
                onClick={() => setisMenuOpen(false)}
              >
                Collection
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `py-2 pl-6 border border-gray-200 uppercase ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
                onClick={() => setisMenuOpen(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `py-2 pl-6 border border-gray-200 uppercase ${
                    isActive ? "bg-black text-white" : ""
                  }`
                }
                onClick={() => setisMenuOpen(false)}
              >
                contact
              </NavLink>
            </div>
          </div>
        </div>
      </Container>
  );
};

export default Navbar;
