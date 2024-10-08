import React from "react";
import Logo from "./Logo";
import ThemeSelector from "./ThemeSelector";
import ScenarioSelector from "./ScenarioSelector";
import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header className="flex items-center w-full justify-between p-1 border-b border-borderGray">
      <div className="flex items-center">
        <Logo className="mr-4" />
        <ThemeSelector />
        <ScenarioSelector />
      </div>

      <div className="flex items-center space-x-1">
        <SearchBar />
        <UserProfile />
      </div>
    </header>
  );
};

export default Header;
