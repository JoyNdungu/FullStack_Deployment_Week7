import React from "react";

const Settings = ({ darkMode, setDarkMode }) => {
  return (
    <div className={`p-6 rounded-xl ${darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <label className="flex items-center gap-2">
        <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        Dark Mode
      </label>
    </div>
  );
};

export default Settings;
