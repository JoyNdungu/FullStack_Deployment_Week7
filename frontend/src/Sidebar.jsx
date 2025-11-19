import settings from "./assets/settings.png";
import lightmode from "./assets/lightmode.png";

const Sidebar = ({ currentPage, setCurrentPage, darkMode, setDarkMode }) => {
  const menuItems = ["dashboard", "form", "reports", "tips"];

  return (
    <section
      className={`w-60 p-4 flex flex-col transition-colors duration-300 ${
        darkMode ? "bg-gray-900" : "bg-sky-lightest"
      }`}
    >
      {/* Title */}
      <div
        className={`text-center font-bold text-xl mb-4 transition-colors duration-300 ${
          darkMode ? "text-cyan-400" : "text-sky-dark"
        }`}
      >
        Dashboard
      </div>
      <hr
        className={`border ${darkMode ? "border-gray-700" : "border-indigo-dark"} mb-4`}
      />

      {/* Menu */}
      <ul className="flex flex-col gap-4 text-lg cursor-pointer">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`transition-colors duration-300 capitalize px-2 py-1 rounded-md ${
              currentPage === item
                ? darkMode
                  ? "font-semibold text-white bg-blue-darker"
                  : "font-semibold text-sky-dark bg-sky-lighter"
                : darkMode
                ? "text-blue-300 hover:text-white hover:bg-blue-darker/20"
                : "text-sky-dark hover:bg-sky-lighter/50"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Footer Buttons */}
      <div className="flex flex-row gap-4 mt-auto justify-center">
        <img
          src={settings}
          alt="Settings"
          className="h-9 cursor-pointer hover:opacity-80 transition-opacity"
        />
        <img
          src={lightmode}
          alt={darkMode ? "Light Mode" : "Dark Mode"}
          className="h-9 cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        />
      </div>
    </section>
  );
};

export default Sidebar;
