import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase"; // Your Firebase config
import { useNavigate } from "react-router-dom"; // For navigation after successful registration

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Local state to handle visibility
  const navigate = useNavigate(); // Initialize the navigate hook

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  // Validate the form data
  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required";
    }
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

  // Handle registration with email and password
  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Register user with email and password
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Update user profile with name (from the form)
        updateProfile(user, {
          displayName: formData.name
        }).then(() => {
          alert("Registration successful!");
          navigate("/dashboard"); // Navigate to the dashboard after successful registration
        }).catch((error) => {
          console.error("Error updating profile:", error.message);
          alert("Error updating profile: " + error.message);
        });
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
        alert("Error registering: " + error.message);
        setIsSubmitting(false);
      });
  };

  // Close the form
  const closeForm = () => {
    setIsVisible(false); // Hide the form
  };

  if (!isVisible) return null; // Return nothing if the form is hidden

  return (
    <div className="flex justify-center items-center z-50 mt-96">
      <div className="relative bg-white p-6 rounded-md shadow-lg w-96 z-10">
        <button
          onClick={closeForm}  // Close the form when clicked
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times; {/* Close symbol */}
        </button>
        <h2 className="text-center mb-4 text-lg font-semibold">Register</h2>

        <form onSubmit={handleRegister}>
          {/* Form fields for Name, Email, and Password */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
            />
            {errors.name && <small className="text-red-500">{errors.name}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
            {errors.email && <small className="text-red-500">{errors.email}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
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
            className={`w-full py-2 px-4 rounded-md text-white ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
