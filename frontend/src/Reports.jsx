import { Trash2, Download } from "lucide-react";

const Reports = ({ readings, deleteReading, darkMode }) => {
  // Export CSV
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

  const cardClasses = (bgClass, textClass) =>
    `p-4 rounded ${bgClass} ${textClass} font-bold`;

  return (
    <div className={`p-4 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className={darkMode ? "text-white text-2xl font-bold" : "text-gray-800 text-2xl font-bold"}>
            Usage Reports
          </h2>
          <p className={darkMode ? "text-gray-300" : "text-gray-700"}>Detailed breakdown of water usage</p>
        </div>
        <button
          onClick={handleExport}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded flex items-center gap-1"
        >
          <Download size={16} /> Export CSV
        </button>
      </div>

      {/* Table */}
      <table className="w-full border-collapse">
        <thead>
          <tr className={darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"}>
            {["Date", "Units (L)", "Cost (KES)", "Action"].map((heading) => (
              <th key={heading} className="border px-4 py-2 text-left">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {readings.map((reading) => (
            <tr key={reading._id} className={darkMode ? "bg-gray-800 text-white hover:bg-gray-700" : "bg-white text-gray-800 hover:bg-gray-100"}>
              <td className="border px-4 py-2">
                {new Date(reading.date).toLocaleDateString("en-US")}
              </td>
              <td className="border px-4 py-2">{reading.units}</td>
              <td className="border px-4 py-2">{reading.cost.toLocaleString()}</td>
              <td className="border px-4 py-2 text-center">
                <button
                  onClick={() => deleteReading(reading._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1 justify-center"
                >
                  <Trash2 size={14} /> Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Summary */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className={cardClasses(darkMode ? "bg-cyan-700" : "bg-teal-200", darkMode ? "text-white" : "text-gray-800")}>
          <p>Total Entries</p>
          <p>{readings.length}</p>
        </div>
        <div className={cardClasses(darkMode ? "bg-blue-700" : "bg-sky-200", darkMode ? "text-white" : "text-gray-800")}>
          <p>Average Daily</p>
          <p>{readings.length ? Math.round(readings.reduce((sum, r) => sum + r.units, 0) / readings.length) : 0}L</p>
        </div>
        <div className={cardClasses(darkMode ? "bg-indigo-700" : "bg-yellow-200", darkMode ? "text-white" : "text-gray-800")}>
          <p>Total Usage</p>
          <p>{readings.reduce((sum, r) => sum + r.units, 0)}L</p>
        </div>
        <div className={cardClasses(darkMode ? "bg-pink-700" : "bg-pink-200", darkMode ? "text-white" : "text-gray-800")}>
          <p>Total Cost</p>
          <p>{readings.reduce((sum, r) => sum + r.cost, 0)} KES</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
