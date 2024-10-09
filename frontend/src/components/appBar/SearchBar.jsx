import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => (
  <>
    <div className="relative hidden md:block">
      <input type="text" placeholder="Search..." className="pl-8 pr-3 py-2 rounded-full text-base w-28" />
      <FiSearch className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-customGray" />
    </div>
    <div className="md:hidden">
      <FiSearch className="w-5 h-5 text-customGray" />
    </div>
  </>
);

export default SearchBar;
