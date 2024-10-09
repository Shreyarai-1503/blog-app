import React from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/authService";

const NavLink = ({ link, isActive }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (link.label === "Log Out") {
      e.preventDefault();
      authService.logout();
      navigate("/signin");
    }
  };

  return (
    <li className="relative">
      {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />}
      <Link
        className={`flex items-center p-2 text-lg font-semibold ${isActive ? "text-primary" : "text-customGray"}`}
        to={link.route}
        onClick={handleClick}
      >
        <div className="w-12 h-12 flex items-center justify-center ml-2">
          <link.icon className="w-6 h-6 md:w-8 md:h-8" />
        </div>
        <span className="hidden lg:inline ml-2">{link.label}</span>
      </Link>
    </li>
  );
};

export default NavLink;
