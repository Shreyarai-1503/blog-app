import React from "react";
import Logo from "./Logo";
import ThemeSelector from "./ThemeSelector";
import ScenarioSelector from "./ScenarioSelector";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className="flex flex-col w-full p-1 border-b border-borderGray">
      <div className="flex items-center w-full justify-between">
        {/* Left section */}
        <div className="flex items-center">
          <Logo className="mr-4" />
          {/* Hide ThemeSelector and ScenarioSelector on small screens */}
          <div className="hidden sm:flex items-center">
            <ThemeSelector />
            <ScenarioSelector />
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-1">
          <SearchBar />
          <UserProfile />
        </div>
      </div>

      {/* Mobile view for ThemeSelector and ScenarioSelector */}
      <div className="sm:hidden flex items-center justify-center mb-2 space-x-2 w-full">
        <ThemeSelector />
        <ScenarioSelector />
      </div>
    </header>
  );
};

export default Header;
