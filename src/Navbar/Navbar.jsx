import React, { useState, useEffect, useContext } from "react";
import { FaBars, FaFacebookF, FaInstagram, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartContext, useAuth } from "../Data/CartContext";
import ProfileModal from "../Modal/Profile"; // Import the new modal component
import "./Navbar.css";

const Nav = () => {
  const { cartCount, user, logout } = useAuth();
  const { profile } = useContext(CartContext); // Extract profileInfo from the context
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false); // if scroll down hide the navbar
      } else {
        setShow(true); // if scroll up show the navbar
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const clickCart = () => {
    navigate("/cart");
  };

  const viewProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const clickLogo = () => {
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Social media */}
      <div className="px-6 py-3 hidden lg:block">
        <div className="flex gap-1 items-center justify-center lg:justify-start">
          <FaFacebookF className="bg-blue-700 text-white px-2 rounded font-bold" size={30} />
          <FaInstagram className="text-[#FF00FF] rounded font-bold" size={32} />
          <FaTelegramPlane className="bg-blue-500 text-white px-1 rounded font-bold" size={30} />
          <FaDiscord className="bg-[rgb(111,133,213)] text-white rounded font-bold" size={30} />
        </div>
      </div>

      {/* Navbar */}
      <header
        className={`fixed top-0 w-full bg-[#0F172A] shadow-md transition-transform duration-300 z-50  ${
          show ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center py-3 px-4 lg:px-0">
          {/* Logo */}
          <div className="flex items-center">
            <img
              onClick={clickLogo}
              src="https://www.pngall.com/wp-content/uploads/13/Anime-Logo-PNG-HD-Image.png"
              alt="Logo"
              className="h-[50px] lg:h-[80px] cursor-pointer"
            />
            <div className="hidden lg:block ml-2">
              <div className="flex cursor-pointer" onClick={clickLogo}>
                <span className="font-bold text-[25px] text-white italic">Anime</span>
                <p className="font-bold text-[25px] text-blue-800 italic">Shop</p>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden lg:block relative">
            <input
              type="search"
              id="default-search"
              className="block w-[500px] py-3 px-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300"
              placeholder="Search Product"
              required
            />
            <button
              type="submit"
              className="text-gray-300 font-bold absolute end-2.5 bottom-[7px] bg-blue-700 hover:bg-blue-800 rounded px-3 py-2"
            >
              Search
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="text-white lg:hidden" onClick={toggleSidebar}>
              <FaBars size={30} />
            </button>

            <div className="relative flex items-center">
              <IoBagHandleOutline
                className="text-white hover:text-gray-600 cursor-pointer"
                size={33}
                onClick={clickCart}
              />
              {cartCount > 0 && (
                <p className="absolute top-0 right-0 text-[11px] w-4 h-4 bg-red-600 text-white rounded-full flex items-center justify-center">
                  {cartCount}
                </p>
              )}
            </div>

            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="text-gray-300 font-bold border-3 border-blue-500 hover:bg-blue-900 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  {profile && profile.imageUrl ? (
                    <img
                      src={profile.imageUrl}
                      alt="Profile"
                      className="w-9 h-9 mx-4 rounded-full object-cover"
                    />
                  ) : (
                    <span>{user.username[0].toUpperCase()}</span>
                  )}
                </button>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#282828] border rounded shadow-lg z-50">
                    <div className="flex items-center mt-2">
                      {profile && profile.imageUrl ? (
                        <img
                          src={profile.imageUrl}
                          alt="Profile"
                          className="w-9 h-9 mx-4 rounded-full object-cover"
                        />
                      ) : (
                        <span>{user.username[0].toUpperCase()}</span>
                      )}
                      <p className="text-white mt-2 ml-2">
                        {profile ? `${profile.firstName} ${profile.lastName}` : user.username}
                      </p>
                    </div>
                    <button
                      onClick={viewProfile}
                      className="block w-full bg-[#282828] text-left px-4 py-2 text-white hover:bg-[#343434]"
                    >
                      Profile
                    </button>
                    <button className="block w-full bg-[#282828] text-left px-4 py-2 text-white hover:bg-[#343434]">
                      Setting
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full bg-[#282828] text-left px-4 py-2 text-white hover:bg-[#343434]"
                    >
                      Log Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login" className="text-gray-300 font-bold bg-blue-800 hover:bg-blue-900 rounded px-4 py-2">
                Log In
              </Link>
            )}
          </div>
        </div>

        {/* 2nd Navbar */}
        <div className="hidden lg:flex justify-between items-center mt-3 max-w-[1600px] mx-auto">
          <div className="flex gap-3 items-center"></div>
          <div className="flex gap-5">
            <Link to="/" className={`link ${pathname === "/" ? "active" : ""}`}>
              Home
            </Link>
            <Link to="/shop" className={`link ${pathname === "/shop" ? "active" : ""}`}>
              Shop
            </Link>
            <Link to="/cart" className={`link ${pathname === "/cart" ? "active" : ""}`}>
              Cart
            </Link>
            <Link to="/about" className={`link ${pathname === "/about" ? "active" : ""}`}>
              About
            </Link>
            <Link to="/contact" className={`link ${pathname === "/contact" ? "active" : ""}`}>
              Contact
            </Link>
          </div>
          <div className="flex gap-4">
            <button className="ml-2 px-5 py-2 rounded-md bg-yellow-400 text font-semibold">
              See Trending
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[300px] h-full bg-[#1E293B] z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-6 mt-[80px]">
          {/* Close button */}
          <button onClick={toggleSidebar} className="text-[#94A3B8] text-5xl">
            ×
          </button>

          {/* Search */}
          <div className="relative mb-4">
            <input
              type="search"
              id="sidebar-search"
              className="block w-full py-3 px-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300"
              placeholder="Search Product"
              required
            />
            <button
              type="submit"
              className="text-gray-300 font-bold absolute right-2.5 bottom-[7px] bg-blue-700 hover:bg-blue-800 rounded px-3 py-2"
            >
              Search
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 mb-4">
            <Link to="/" className="text-[#94A3B8] text-[18px] font-bold no-underline">
              Home
            </Link>
            <Link to="/shop" className="text-[#94A3B8] text-[18px] font-bold no-underline">
              Shop
            </Link>
            <Link to="/cart" className="text-[#94A3B8] text-[18px] font-bold no-underline">
              Cart
            </Link>
            <Link to="/about" className="text-[#94A3B8] text-[18px] font-bold no-underline">
              About
            </Link>
            <Link to="/contact" className="text-[#94A3B8] text-[18px] font-bold no-underline">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      {isModalOpen && <ProfileModal user={user} closeModal={closeModal} />}
    </>
  );
};

export default Nav;
