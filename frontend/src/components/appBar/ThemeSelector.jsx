import React from "react";

const ThemeSelector = () => (
  <div className="relative mx-2">
    <select className="appearance-auto bg-[#FAFAFB] px-4 py-1.5 text-customGray text-base font-medium border border-borderGray rounded-lg w-44">
      <option>Afterglow</option>
      <option>Subset</option>
      <option>Midnight</option>
    </select>
  </div>
);

export default ThemeSelector;
