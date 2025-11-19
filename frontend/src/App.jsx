import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dashboard from "./Dashboard.jsx";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import Form from "./Form.jsx";
import Reports from "./Reports.jsx";
import Tips from "./Tips.jsx";

// Improved App.jsx for MajiTrack
// - Adds smooth page transitions (framer-motion)
// - Adds subtle background overlay and transition-colors wrapper
// - Keeps your existing state/logic intact
// IMPORTANT: install framer-motion if you haven't: `npm install framer-motion`

const App = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const [readings, setReadings] = useState([
    { date: "2025-11-01", units: 45, cost: 450 },
    { date: "2025-11-02", units: 52, cost: 520 },
    { date: "2025-11-03", units: 48, cost: 480 },
    { date: "2025-11-04", units: 55, cost: 550 },
    { date: "2025-11-05", units: 50, cost: 500 },
    { date: "2025-11-06", units: 47, cost: 470 },
    { date: "2025-11-07", units: 53, cost: 530 },
  ]);

  const addReading = (newReading) => {
    setReadings(
      [...readings, newReading].sort(
        (a, b) => new Date(a.date) - new Date(b.date)
      )
    );
  };

  const deleteReading = (index) => {
    setReadings(readings.filter((_, i) => i !== index));
  };

  // small helper for page titles
  const pageTitle = () => {
    switch (currentPage) {
      case "dashboard":
        return "Dashboard";
      case "form":
        return "Add Reading";
      case "reports":
        return "Reports";
      case "tips":
        return "Tips";
      default:
        return "MajiTrack";
    }
  };

  return (
    <div
      className={`flex flex-row min-h-screen relative transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* subtle radial background overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,_rgba(0,0,0,0.03),_transparent_60%)] dark:bg-[radial-gradient(circle,_rgba(255,255,255,0.02),_transparent_60%)]" />
      </div>

      <Sidebar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="flex flex-col flex-1 z-10">
        <Navbar darkMode={darkMode} pageTitle={pageTitle()} />

        {/* AnimatePresence allows exit animations when switching pages */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.main
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.28 }}
            className={`flex-1 p-6 md:p-8 lg:p-10 ${
              darkMode ? "bg-transparent" : "bg-transparent"
            }`}
          >
            {/* Page container card to give consistent look */}
            <div
              className={`max-w-7xl mx-auto rounded-2xl p-6 md:p-8 shadow-sm transition-colors duration-300 ${
                darkMode ? "bg-gray-800/70 backdrop-blur-sm" : "bg-white"
              }`}
            >
              {currentPage === "dashboard" && (
                <Dashboard
                  readings={readings}
                  setCurrentPage={setCurrentPage}
                  darkMode={darkMode}
                />
              )}

              {currentPage === "form" && (
                <Form
                  addReading={addReading}
                  setCurrentPage={setCurrentPage}
                  darkMode={darkMode}
                />
              )}

              {currentPage === "reports" && (
                <Reports
                  readings={readings}
                  deleteReading={deleteReading}
                  darkMode={darkMode}
                />
              )}

              {currentPage === "tips" && <Tips darkMode={darkMode} />}
            </div>

            {/* floating CTA - Add Reading */}
            <div className="fixed bottom-8 right-8 md:bottom-10 md:right-10 z-20">
              <button
                onClick={() => setCurrentPage("form")}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg transform transition-transform hover:-translate-y-1 active:scale-95 focus:outline-none ${
                  darkMode
                    ? "bg-blue-600 text-blue-500"
                    : "bg-blue-600 text-blue-500 hover:bg-blue-700"
                }`}
                aria-label="Add reading"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Add Reading</span>
              </button>
            </div>
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
