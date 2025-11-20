import React from "react";
import { Home, PlusCircle, FileText, Lightbulb, Settings as SettingsIcon } from "lucide-react";

const Sidebar = ({ currentPage, setCurrentPage, darkMode, setDarkMode }) => {
  const menuItems = [
    { label: "Dashboard", page: "dashboard", icon: <Home size={18} /> },
    { label: "Add Reading", page: "form", icon: <PlusCircle size={18} /> },
    { label: "Reports", page: "reports", icon: <FileText size={18} /> },
    { label: "Tips", page: "tips", icon: <Lightbulb size={18} /> },
    { label: "Settings", page: "settings", icon: <SettingsIcon size={18} /> },
  ];

  return (
    <aside
      className={`h-full w-64 p-6 flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold mb-6">MajiTrack</h1>

      <ul className="flex flex-col gap-3">
        {menuItems.map((item) => {
          const isActive = currentPage === item.page;
          const activeBg = darkMode ? "bg-blue-700 text-white" : "bg-blue-100 text-gray-900";
          const hoverBg = darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200";

          return (
            <li
              key={item.page}
              onClick={() => setCurrentPage(item.page)}
              className={`cursor-pointer px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 ${
                isActive ? activeBg : hoverBg
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-5 h-5"
          />
          <span className="font-medium">Dark Mode</span>
        </label>
      </div>
    </aside>
  );
};

export default Sidebar;
