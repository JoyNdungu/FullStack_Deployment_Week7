import settings from './assets/settings.png';
import lightmode from './assets/lightmode.png';

const Sidebar = () => {
  return (
    <aside className="w-60 bg-blue-darker p-6 flex flex-col min-h-screen shadow-lg">
      
      {/* Sidebar title */}
      <div className="text-sky-lightest text-xl font-bold flex items-center justify-center mb-6">
        <p>Menu</p>
      </div>

      <hr className="border-blue-light mb-6"/>

      {/* Menu items */}
      <nav className="flex flex-col gap-6 text-sky-lightest text-lg">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-cyan cursor-pointer transition-colors duration-200">Dashboard</li>
          <li className="hover:text-cyan cursor-pointer transition-colors duration-200">Form</li>
          <li className="hover:text-cyan cursor-pointer transition-colors duration-200">Reports</li>
          <li className="hover:text-cyan cursor-pointer transition-colors duration-200">Tips</li>
        </ul>

        {/* Bottom icons */}
        <div className="flex flex-row gap-6 mt-10 justify-center">
          <img src={settings} alt="Settings" className="h-8 cursor-pointer hover:opacity-80 transition-opacity duration-200" />
          <img src={lightmode} alt="Light Mode" className="h-8 cursor-pointer hover:opacity-80 transition-opacity duration-200" />
        </div>
      </nav>

    </aside>
  );
}

export default Sidebar;
