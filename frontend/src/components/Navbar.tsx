import { Link, NavLink, useNavigate } from "react-router-dom";

import { useState } from "react";
import Container from "../Container";
import { useGlobalContext } from "../../GlobalContext";
import cart from "../assets/cart.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const { setIsSearchBarOpen, cartItems } = useGlobalContext();

  const { isUserDetailOpen, setIsUserDetailOpen } = useGlobalContext();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const logoutUser = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("User is logged out");
    } else {
      console.log("User might be logged in");
    }
    user ? console.log(user) : "";
  };

  return (
    <Container>
      <div className="flex items-center py-5 justify-between text-sm font-medium uppercase">
        <Link to="/">
          <img
            src="/images/logo.png"
            className="w-36 cursor-pointer"
            alt="logo"
          />
        </Link>
        <ul className="hidden gap-5 text-gray-700 sm:flex">
          <NavLink to="/">
            {({ isActive }) => (
              <>
                Home
                <hr
                  className={`w-2/4 h-[1.5px] mx-auto bg-gray-700 ${
                    isActive ? "block" : "hidden"
                  }`}
                ></hr>
              </>
            )}
          </NavLink>
          <NavLink to="/collection">
            {({ isActive }) => (
              <>
                Collection
                <hr
                  className={`w-2/4 h-[1.5px] mx-auto bg-gray-700 ${
                    isActive ? "block" : "hidden"
                  }`}
                ></hr>
              </>
            )}
          </NavLink>
          <NavLink to="/about">
            {({ isActive }) => (
              <>
                About
                <hr
                  className={`w-2/4 bg-gray-700 mx-auto h-[0.094rem] ${
                    isActive ? "block" : "hidden"
                  }`}
                ></hr>
              </>
            )}
          </NavLink>
          <NavLink to="/contact">
            {({ isActive }) => (
              <>
                Contact
                <hr
                  className={`w-2/4 bg-gray-700 mx-auto h-[0.094rem] ${
                    isActive ? "block" : "hidden"
                  }`}
                />
              </>
            )}
          </NavLink>
        </ul>
        <div className="flex gap-6 items-center">
          <Link to="#">
            <img
              src="/images/search.png"
              className="w-5 cursor-pointer"
              alt="search-icon"
              onClick={() => setIsSearchBarOpen(true)}
            />
          </Link>

          <Link to="/cart" className="relative">
            <img src={cart} className="w-5 cursor-pointer" alt="cart-icon" />
            <p className="rounded-full w-4 h-4 bg-black text-white leading-4 text-[0.5rem] text-center absolute bottom-[-0.313rem] right-[-0.313rem]">
              {cartItems.length}
            </p>
          </Link>
          <div>
            {user ? (
              <div className="relative">
                <div
                  onClick={() => setIsUserDetailOpen(true)}
                  className="bg-gray-200 rounded-full w-6 flex justify-center items-center h-6 cursor-pointer"
                >
                  {user.email.slice(0, 1)}
                </div>
                {isUserDetailOpen && (
                  <div className="absolute rounded top-10 right-0 bg-gray-200 p-4 w-[17rem]">
                    <p className="italic mb-5 text-xs normal-case">
                      Logged in as {user.email}
                    </p>
                  
                    <div
                      onClick={logoutUser}
                      className="w-full cursor-pointer bg-gray-600 py-1  px-3 text-white"
                    >
                      Logout
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="relative group">
                <Link to="/signup">
                  <img
                    src="/images/login.png"
                    className="w-5 cursor-pointer"
                    alt="user-icon"
                  />
                </Link>
                <div className="hidden group-hover:block absolute right-0 pt-4">
                  <div className="bg-slate-100 text-gray-500 gap-2 py-3 px-5 w-36 rounded">
                    <p className="hover:text-black cursor-pointer pt-2 capitalize">
                      Profile
                    </p>
                    <p className="hover:text-black cursor-pointer pt-2 capitalize">
                      <Link to="/orders">Orders</Link>
                    </p>
                    <p onClick={() => logoutUser()} className="hover:text-black cursor-pointer pt-2 capitalize">
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
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
