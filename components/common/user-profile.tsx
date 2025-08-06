import React from "react";
import { User } from "@/types";

interface UserProfileProps {
  user: User;
  showStatus?: boolean;
}

export const UserProfile: React.FC<UserProfileProps> = ({
  user,
  showStatus = true,
}) => (
  <div className="flex items-center space-x-3">
    <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
    <div className="flex-1 min-w-0">
      <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
      <p className="text-xs text-gray-500 truncate">{user.role}</p>
    </div>
    {showStatus && <div className="w-2 h-2 bg-green-400 rounded-full"></div>}
  </div>
);
