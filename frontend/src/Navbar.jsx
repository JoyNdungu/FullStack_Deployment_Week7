import MajiTrack from "./assets/MajiTrack.png";

const Navbar = ({ darkMode }) => {
  return (
    <nav
      className={`flex items-center justify-between px-6 py-3 transition-colors duration-300 ${
        darkMode ? "bg-indigo-dark" : "bg-sky-light"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={MajiTrack} alt="MajiTrack Logo" className="h-12 w-12" />
        <h1 className={`text-2xl font-bold ${darkMode ? "text-cyan-light" : "text-blue-dark"}`}>
          MAJITRACK
        </h1>
      </div>

      {/* Subtitle */}
      <p className={`text-sm font-medium ${darkMode ? "text-sky-lightest" : "text-blue-darker"}`}>
        For Every Drop That Counts.
      </p>

      {/* Spacer for alignment */}
      <div className="w-12"></div>
    </nav>
  );
};

export default Navbar;
