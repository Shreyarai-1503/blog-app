import React, { useState } from "react";
import Button from "../mainContent/Button";
import FormField from "../mainContent/FormField";
import logo from "../../assets/logo.png";

const SignIn = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the sign-in data to your backend
    console.log("Sign-in attempt:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-8 m-4 max-w-md w-full">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Logo" className="h-10 mr-4" />
          <h2 className="text-2xl font-bold text-gray-800">Sign In</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="flex justify-end space-x-4">
            <Button variant="secondary" onClick={onClose} className="px-4 py-2">
              Cancel
            </Button>
            <Button variant="primary" type="submit" className="px-4 py-2">
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
