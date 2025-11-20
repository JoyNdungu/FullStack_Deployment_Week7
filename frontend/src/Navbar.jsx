import MajiTrack from "./assets/MajiTrack.png";

const Navbar = ({ darkMode, pageTitle, openSidebar }) => {
  return (
    <nav
      className={`flex items-center justify-between px-4 sm:px-6 py-3 transition-colors duration-300 ${
        darkMode ? "bg-indigo-dark" : "bg-sky-light"
      }`}
    >
      {/* Mobile Hamburger Button */}
      <button
        onClick={openSidebar}
        className="md:hidden flex flex-col gap-1 cursor-pointer"
      >
        <span className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
        <span className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
        <span className="w-6 h-0.5 bg-gray-800 dark:bg-gray-200"></span>
      </button>

      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={MajiTrack} alt="MajiTrack Logo" className="h-10 w-10" />
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-cyan-light" : "text-blue-dark"}`}>
          {pageTitle}
        </h1>
      </div>

      {/* Right spacer to balance mobile hamburger */}
      <div className="w-6 md:w-12"></div>
    </nav>
  );
};

export default Navbar;
