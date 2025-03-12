import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { doLogout } from "../auth";
import { AuthContext } from "../auth/AuthContext";
import Login from "./Login";

function Navbar() {
  const { login, user, updateAuthStatus } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = () => {
    doLogout(() => {
      updateAuthStatus();
      navigate("/");
    });
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Manage dropdown state

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            CityDiary
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6">
            <li>
              <NavLink to="/" className="navbar-item">
                Home
              </NavLink>
            </li>

            {/* Dropdown Menu for Desktop */}
            <li className="relative group">
              <button className="navbar-item" onClick={() => setDropdownOpen(!dropdownOpen)}>
                Choose ▼
              </button>
              {dropdownOpen && (
                <ul className="absolute left-0 w-40 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                  <li><NavLink to="/hospital" className="block p-2">Hospital</NavLink></li>
                  <li><NavLink to="/map" className="block p-2">Map</NavLink></li>
                  <li><NavLink to="/famous" className="block p-2">Places</NavLink></li>
                  <li><NavLink to="/restaurant" className="block p-2">Restaurant</NavLink></li>
                  <li><NavLink to="/searchplace" className="block p-2">View Detail</NavLink></li>
                </ul>
              )}
            </li>

            <li><NavLink to="/about" className="navbar-item">About</NavLink></li>
            <li><NavLink to="/contact" className="navbar-item">Contact</NavLink></li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            {/* Auth */}
            {login ? (
              <>
                <span className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-md">
                  {user}
                </span>
                <button
                  onClick={logout}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/signup" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Sign In
                </Link>
                <button
                  onClick={() => document.getElementById("my_modal_3").showModal()}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                  Login
                </button>
                <Login />
              </>
            )}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg">
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li><NavLink to="/" className="navbar-item">Home</NavLink></li>

              {/* Mobile Dropdown */}
              <li className="relative">
                <button className="navbar-item" onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Choose ▼
                </button>
                {dropdownOpen && (
                  <ul className="w-40 bg-white shadow-lg rounded-lg dark:bg-gray-800 text-center mt-2">
                    <li><NavLink to="/hospital" className="block p-2">Hospital</NavLink></li>
                    <li><NavLink to="/map" className="block p-2">Map</NavLink></li>
                    <li><NavLink to="/famous" className="block p-2">Places</NavLink></li>
                    <li><NavLink to="/restaurant" className="block p-2">Restaurant</NavLink></li>
                    <li><NavLink to="/searchplace" className="block p-2">View Detail</NavLink></li>
                  </ul>
                )}
              </li>

              <li><NavLink to="/about" className="navbar-item">About</NavLink></li>
              <li><NavLink to="/contact" className="navbar-item">Contact</NavLink></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
