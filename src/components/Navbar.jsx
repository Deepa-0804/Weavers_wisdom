import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import Login from "./Login";
import Register from "./Register";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [registerFormVisible, setRegisterFormVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleLoginForm = () => {
    setLoginFormVisible(!loginFormVisible);
    setRegisterFormVisible(false);
  };

  const toggleRegisterForm = () => {
    setRegisterFormVisible(!registerFormVisible);
    setLoginFormVisible(false);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login status to true
    setLoginFormVisible(false); // Close the login form
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-20 w-30 mr-2" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navbar */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex space-x-4 items-center">
            {!isLoggedIn ? (
              // User Icon
              <div className="hidden lg:flex space-x-4">
                <button
                  onClick={toggleLoginForm}
                  className="py-2 px-3 border rounded-md"
                >
                  Sign In
                </button>
                <button
                  onClick={toggleRegisterForm}
                  className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
                >
                  Create an account
                </button>
              </div>
            ) : (
              <div className="relative">
                <img
                  src="/path/to/user-icon.png"
                  alt="User Icon"
                  className="h-8 w-8 rounded-full cursor-pointer"
                />
              </div>
              // Login and Register Buttons
            )}

            {/* Mobile Navbar Toggle */}
            {isLoggedIn && (
              <button onClick={toggleNavbar} className="lg:hidden">
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && !isLoggedIn && (
          <div className="fixed right-0 z-20 bg-orange-300 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={toggleLoginForm}
                className="py-2 px-3 border rounded-md"
              >
                Sign In
              </button>
              <button
                onClick={toggleRegisterForm}
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Create an account
              </button>
            </div>
          </div>
        )}

        {/* Login Form */}
        {loginFormVisible && (
          <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md">
            <div
              className="fixed inset-0 bg-opacity-50"
              onClick={toggleLoginForm}
            ></div>
            <div>
              <Login onSuccess={handleLoginSuccess} />
            </div>
          </div>
        )}

        {/* Register Form */}
        {registerFormVisible && (
          <div className="fixed inset-0 flex justify-center items-center z-50 backdrop-blur-md">
            <div
              className="fixed inset-0 bg-black bg-opacity-50"
              onClick={toggleRegisterForm}
            ></div>
            <div>
              <Register />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
