import React from "react";
import avatar from "../../assets/avatar.png";

const UserProfile = () => (
  <div className="flex items-center space-x-2 pr-4">
    <img
      src={avatar}
      alt="Profile"
      className="w-10 h-10 rounded-full"
    />
    <div className="flex flex-col">
      <span className="text-base text-[#676E7E] font-semibold">Robert Fox</span>
      <span className="text-sm text-customGray font-medium">Finance Manager</span>
    </div>
  </div>
);

export default UserProfile;
