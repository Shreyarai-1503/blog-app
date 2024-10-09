import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../mainContent/Button";
import FormField from "../mainContent/FormField";
import logo from "../../assets/logo.png";
import authService from "../../services/authService";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await authService.signin(formData);
      navigate('/blog');
    } catch (error) {
      console.error("Sign-in error:", error);
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 m-4 w-full max-w-md">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="h-10 mb-4 sm:mb-0 sm:mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
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
          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}
          <div className="flex items-center justify-between">
            <Button variant="primary" type="submit" className="w-auto px-4 py-2">
              Sign In
            </Button>
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-primary hover:underline focus:outline-none"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
