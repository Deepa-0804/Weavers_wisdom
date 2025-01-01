import React, { useState } from "react";
import { auth } from "./firebase"; // Import Firebase auth
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FaGoogle } from "react-icons/fa"; // Google Icon from React Icons
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control modal visibility
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors as user types
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);

    try {
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Login Successful!");
      navigate("/dashboard"); // Redirect to dashboard page after successful login
      closeForm(); // Close the modal after successful login
    } catch (error) {
      console.error("Error signing in:", error.message);
      setErrors({ form: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      alert(`Welcome, ${user.displayName}!`);
      navigate("/dashboard"); // Redirect to dashboard page after successful Google login
      closeForm(); // Close the modal after successful login
    } catch (error) {
      console.error("Error with Google login:", error.message);
      setErrors({ form: error.message });
    }
  };

  // Close the form modal
  const closeForm = () => {
    setIsVisible(false); // Hide the form
  };

  if (!isVisible) return null; // Return nothing if the form is hidden

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 mt-60">
      <div className="relative bg-white p-6 rounded-md shadow-lg w-96 z-10">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button onClick={closeForm} className="text-gray-700 hover:text-red-500">
            ✖
          </button>
        </div>

        <h2 className="text-center mb-4 text-lg font-semibold">Login Form</h2>

        {errors.form && <p className="text-red-500 text-center">{errors.form}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.password && <small className="text-red-500">{errors.password}</small>}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 rounded-md text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Google Login Button */}
        <div className="flex items-center justify-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full py-2 px-4 rounded-md border bg-white text-black shadow-md hover:bg-gray-100"
          >
            <FaGoogle className="mr-2" /> Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
