import React, { useContext } from "react";
// dependency
import { ChevronFirst, ChevronLast, MoreVertical } from "lucide-react";
// context
import { SidebarContext } from "../App.jsx";

const Sidebar = ({ children }) => {
  const { expandedSidebar, setExpandedSidebar } = useContext(SidebarContext);
  return (
    <>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            {expandedSidebar && <p className="w-32">Logo Here!</p>}
            <button
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
              onClick={() => setExpandedSidebar((prev) => !prev)}
            >
              {expandedSidebar ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
          <ul className="flex-1 px-3">{children}</ul>
          <div className="border-t flex p-3">
            <p className="w-10 h-10 rounded-md">Logo!</p>
            <div
              className={`flex justify-between items-center overflow-hidden transition-all ${
                expandedSidebar ? "w-52 ml-3" : "w-0"
              }`}
            >
              <div className="leading-4">
                <h4 className="font-semibold">CodingPalace</h4>
                <span className="text-xs text-gray-600">
                  codingpalace@gmail.com
                </span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
