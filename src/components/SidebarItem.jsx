import React, { useContext } from "react";
// context
import { SidebarContext } from "../App.jsx";

const SidebarItem = ({ icon, text }) => {
  const { expandedSidebar, currentlyActive } = useContext(SidebarContext);
  return (
    <li
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
        text.includes(currentlyActive)
          ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expandedSidebar ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>
    </li>
  );
};

export default SidebarItem;
