import React from 'react'

const Button = ({ children, variant, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-bold rounded-xl shadow-md transition duration-300 ease-in-out ${
      variant === 'primary'
        ? 'text-white bg-primary hover:bg-primaryDark'
        : 'text-primary bg-white hover:bg-gray-50'
    }`}
  >
    {children}
  </button>
)

export default Button
