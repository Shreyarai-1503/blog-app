import React, { useState, useEffect } from "react";
import authService from "../../services/authService";

const UserProfile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = authService.getCurrentUser();
    setUser(userData?.user);
  }, []);

  if (!user) return null;

  return (
    <div className="flex items-center space-x-2 pr-4">
      <img 
        src={user.image} 
        alt={`${user.name}'s profile`} 
        className="w-10 h-10 rounded-full object-cover" 
      />
      <div className="flex flex-col">
        <span className="text-base text-[#676E7E] font-semibold">{user.name}</span>
        <span className="text-sm text-customGray font-medium">{user.designation}</span>
      </div>
    </div>
  );
};

export default UserProfile;