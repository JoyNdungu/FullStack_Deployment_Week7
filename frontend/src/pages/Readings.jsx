import React, { useEffect, useState } from "react";
import { getReadings, addReading, deleteReading } from "../services/api";

const Readings = () => {
  const [readings, setReadings] = useState([]);
  const [units, setUnits] = useState("");
  const [cost, setCost] = useState("");

  // Fetch readings on mount
  useEffect(() => {
    const fetchData = async () => {
      const data = await getReadings();
      setReadings(data);
    };
    fetchData();
  }, []);

  // Add new reading
  const handleAdd = async () => {
    const newReading = { date: new Date(), units: Number(units), cost: Number(cost) };
    const saved = await addReading(newReading);
    setReadings([...readings, saved]);
    setUnits("");
    setCost("");
  };

  // Delete reading
  const handleDelete = async (id) => {
    await deleteReading(id);
    setReadings(readings.filter((r) => r._id !== id));
  };

  return (
    <div>
      <h2>Water Readings</h2>
      <div>
        <input
          type="number"
          placeholder="Units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
        />
        <input
          type="number"
          placeholder="Cost"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
        />
        <button onClick={handleAdd}>Add Reading</button>
      </div>

      <ul>
        {readings.map((r) => (
          <li key={r._id}>
            {r.date.substring(0, 10)} - {r.units} units - ${r.cost}{" "}
            <button onClick={() => handleDelete(r._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Readings;
