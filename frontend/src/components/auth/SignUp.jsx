import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../mainContent/Button";
import FormField from "../mainContent/FormField";
import logo from "../../assets/logo.png";

const SignUp = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "profilePicture" ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the sign-up data to your backend
    console.log("Sign-up attempt:", formData);
    onClose();
    navigate('/dashboard'); // Redirect to dashboard after successful sign-up
  };

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 m-4 w-full max-w-md">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="h-10 mb-4 sm:mb-0 sm:mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <FormField
            label="Username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <FormField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <FormField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <FormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <div className="space-y-2">
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              name="profilePicture"
              accept="image/*"
              onChange={handleChange}
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-purple-50 file:text-primary"
            />
          </div>
          <div className="flex items-center justify-between">
            <Button variant="primary" type="submit" className="w-auto px-4 py-2">
              Sign Up
            </Button>
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="text-primary hover:underline focus:outline-none"
              >
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
