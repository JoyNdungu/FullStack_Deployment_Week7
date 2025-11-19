import { useState } from "react";
import { Save, X } from "lucide-react";

const Form = ({ addReading, setCurrentPage, darkMode }) => {
  const [formData, setFormData] = useState({ date: "", units: "", cost: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (formData.date && formData.units && formData.cost) {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/readings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            date: formData.date,
            units: Number(formData.units),
            cost: Number(formData.cost),
          }),
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }

        const data = await response.json();
        console.log("Saved reading:", data);

        // Update frontend state
        addReading(data);

        // Reset form and go back to dashboard
        setFormData({ date: "", units: "", cost: "" });
        setCurrentPage("dashboard");
      } catch (error) {
        console.error("Error saving reading:", error);
        alert("Failed to save reading. Check console for details.");
      } finally {
        setLoading(false);
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  const inputClasses = `w-full px-4 py-3 border-2 rounded-lg transition-all focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 ${
    darkMode
      ? "border-gray-700 bg-gray-800 text-gray-100 placeholder-gray-400"
      : "border-gray-300 bg-white text-gray-800 placeholder-gray-500"
  }`;

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-full p-8 ${
        darkMode ? "bg-gray-900" : "bg-sky-lightest"
      }`}
    >
      <div
        className={`rounded-lg shadow-lg p-8 w-full max-w-2xl transition-colors ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-800"
        }`}
      >
        <h2 className="text-3xl font-bold mb-2">Add Water Meter Reading</h2>
        <p className={`mb-8 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Track your daily water consumption and costs
        </p>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Units (Liters)
            </label>
            <input
              type="number"
              value={formData.units}
              onChange={(e) =>
                setFormData({ ...formData, units: e.target.value })
              }
              placeholder="Enter water units consumed"
              className={inputClasses}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Cost (KES)</label>
            <input
              type="number"
              value={formData.cost}
              onChange={(e) =>
                setFormData({ ...formData, cost: e.target.value })
              }
              placeholder="Enter cost"
              className={inputClasses}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <button
              onClick={handleSubmit}
              disabled={loading}
              className={`flex-1 ${
                darkMode
                  ? "bg-cyan hover:bg-cyan-dark text-black"
                  : "bg-cyan-500 hover:bg-cyan-600 text-black"
              } font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2 shadow-lg`}
            >
              <Save size={20} />
              {loading ? "Saving..." : "Save Reading"}
            </button>
            <button
              onClick={() => setCurrentPage("dashboard")}
              className={`px-6 py-3 ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-gray-100"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              } font-semibold rounded-lg transition flex items-center gap-2`}
            >
              <X size={20} /> Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
