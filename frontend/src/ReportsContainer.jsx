// ReportsContainer.jsx
import { useState, useEffect } from "react";
import Reports from "./Reports";

const ReportsContainer = ({ darkMode }) => {
  const [readings, setReadings] = useState([]);

  const fetchReadings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/readings");
      const data = await res.json();
      setReadings(data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteReading = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/readings/${id}`, { method: "DELETE" });
      fetchReadings();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchReadings();
  }, []);

  return <Reports readings={readings} deleteReading={deleteReading} darkMode={darkMode} />;
};

export default ReportsContainer;
