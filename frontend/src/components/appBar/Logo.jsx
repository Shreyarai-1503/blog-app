import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Logo = () => (
  <Link to="/" className="w-16 sm:w-20 md:w-56 transition-all duration-300 flex items-center py-6 px-4">
    <img src={logo} width={28} height={28} alt="Jadwa logo" />
    <span className="font-bold text-primary text-3xl ml-2 hidden lg:inline">
      Jadwa
    </span>
  </Link>
);

export default Logo;
