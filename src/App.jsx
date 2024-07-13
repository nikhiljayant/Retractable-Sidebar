import { createContext, useState } from "react";
// components
import Sidebar from "./components/Sidebar.jsx";
import SidebarItem from "./components/SidebarItem.jsx";
// dependency
import {
  Calendar,
  Flag,
  Home,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Settings,
  StickyNote,
} from "lucide-react";

export const SidebarContext = createContext();

const siderbar_items_arr = [
  {
    text: "Home",
    icon: <Home size={20} />,
  },
  {
    text: "Dashboard",
    icon: <LayoutDashboard size={20} />,
  },
  {
    text: "Projects",
    icon: <StickyNote size={20} />,
  },
  {
    text: "Calendar",
    icon: <Calendar size={20} />,
  },
  {
    text: "Tasks",
    icon: <Layers size={20} />,
  },
  {
    text: "Reporting",
    icon: <Flag size={20} />,
  },
  {
    text: "Settings",
    icon: <Settings size={20} />,
  },
  {
    text: "Help",
    icon: <LifeBuoy size={20} />,
  },
];

function App() {
  const [expandedSidebar, setExpandedSidebar] = useState(true);
  const [currentlyActive, setCurrentlyActive] = useState(null);
  return (
    <>
      <div className="flex">
        <SidebarContext.Provider
          value={{
            expandedSidebar,
            setExpandedSidebar,
            currentlyActive,
            setCurrentlyActive,
          }}
        >
          <Sidebar>
            {siderbar_items_arr?.map((item) => (
              <div onClick={() => setCurrentlyActive(item?.text)}>
                <SidebarItem icon={item?.icon} text={item?.text} />
                {item?.text.includes("Reporting") && <hr className="my-3" />}
              </div>
            ))}
          </Sidebar>
        </SidebarContext.Provider>
      </div>
    </>
  );
}

export default App;
