import React from "react";

const ScenarioSelector = () => (
  <div className="flex items-center space-x-1 mx-2">
    <span className="text-sm">Scenario:</span>
    <select className="appearance-auto rounded-md px-2 py-1.5 pr-6 text-[#676E7E] text-sm font-medium w-28">
      <option>Default</option>
    </select>
  </div>
);

export default ScenarioSelector;
