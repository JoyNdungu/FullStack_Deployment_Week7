import React from "react";
import { Plus, Download } from "lucide-react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = ({ readings, setCurrentPage, darkMode }) => {
  const totalUnits = readings.reduce((sum, r) => sum + r.units, 0);
  const totalCost = readings.reduce((sum, r) => sum + r.cost, 0);
  const avgDaily = Math.round(totalUnits / readings.length);

  const handleExport = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "Date,Units (L),Cost (KES)\n" +
      readings.map((r) => `${r.date},${r.units},${r.cost}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "majitrack_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const cardClass =
    "flex flex-col items-center justify-center rounded-2xl p-6 shadow-md transition-colors duration-300";

  // Background colors mapping for light and dark mode
  const metricsColors = [
    { light: "bg-sky-light", dark: "bg-sky-dark", textLight: "text-sky-darker", textDark: "text-sky-lightest" },
    { light: "bg-blue-light", dark: "bg-blue-dark", textLight: "text-blue-darker", textDark: "text-blue-lightest" },
    { light: "bg-indigo-light", dark: "bg-indigo-dark", textLight: "text-indigo-darker", textDark: "text-indigo-lightest" },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Metrics Cards */}
      <section className="flex flex-col md:flex-row gap-6">
        {metricsColors.map((color, index) => {
          let title = index === 0 ? "Average Daily Usage" : index === 1 ? "Total Units" : "Total Cost";
          let value = index === 0 ? `${avgDaily} L` : index === 1 ? `${totalUnits} L` : `${totalCost} KES`;
          let subtitle = index === 0 ? "This Week" : "Cumulative";
          return (
            <div
              key={index}
              className={`${cardClass} w-full md:w-1/3 ${darkMode ? color.dark : color.light} ${darkMode ? color.textDark : color.textLight}`}
            >
              <p className="text-sm font-medium">{title}</p>
              <p className="text-4xl font-bold mt-2">{value}</p>
              <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
            </div>
          );
        })}
      </section>

      {/* Charts Section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Line Chart - Units */}
        <div className={`${cardClass} w-full md:w-1/2 h-80 ${darkMode ? "bg-gray-900 text-sky-lightest" : "bg-sky-lightest text-sky-darker"}`}>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Total Units Graph</p>
            <button
              onClick={handleExport}
              className={`px-4 py-2 ${darkMode ? "bg-blue-dark hover:bg-blue" : "bg-blue hover:bg-blue-dark"} text-white rounded-lg transition flex items-center gap-2 shadow-md`}
            >
              <Download size={18} /> Export
            </button>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={readings} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#1e3a8a" : "#dbeafe"} />
              <XAxis dataKey="date" tickFormatter={(date) => new Date(date).getDate()} stroke={darkMode ? "#c7d2fe" : "#1e3a8a"} />
              <YAxis stroke={darkMode ? "#c7d2fe" : "#1e3a8a"} />
              <Tooltip labelFormatter={(date) => new Date(date).toLocaleDateString()} />
              <Legend />
              <Line type="monotone" dataKey="units" stroke={darkMode ? "#06b6d4" : "#0ea5e9"} strokeWidth={2} name="Liters" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart - Cost */}
        <div className={`${cardClass} w-full md:w-1/2 h-80 ${darkMode ? "bg-gray-900 text-indigo-lightest" : "bg-indigo-lightest text-indigo-darker"}`}>
          <div className="flex justify-between items-center mb-4">
            <p className="text-lg font-semibold">Total Cost</p>
            <button
              onClick={() => setCurrentPage("form")}
              className={`px-4 py-2 ${darkMode ? "bg-cyan-dark hover:bg-cyan" : "bg-cyan hover:bg-cyan-dark"} text-white rounded-lg transition flex items-center gap-2 shadow-md`}
            >
              <Plus size={18} /> Add Reading
            </button>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={readings} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#1e3a8a" : "#dbeafe"} />
              <XAxis dataKey="date" tickFormatter={(date) => new Date(date).getDate()} stroke={darkMode ? "#c7d2fe" : "#1e3a8a"} />
              <YAxis stroke={darkMode ? "#c7d2fe" : "#1e3a8a"} />
              <Tooltip labelFormatter={(date) => new Date(date).toLocaleDateString()} />
              <Legend />
              <Bar dataKey="cost" fill={darkMode ? "#38bdf8" : "#0ea5e9"} name="Cost (KES)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
