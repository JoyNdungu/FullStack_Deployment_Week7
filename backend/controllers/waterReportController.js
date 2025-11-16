import WaterReport from "../models/waterReport.js";

// Get all readings
export const getReadings = async (req, res) => {
  try {
    const readings = await WaterReport.find();
    res.json(readings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new reading
export const addReading = async (req, res) => {
  const { date, units, cost } = req.body;
  const reading = new WaterReport({ date, units, cost });
  try {
    const newReading = await reading.save();
    res.status(201).json(newReading);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a reading
export const deleteReading = async (req, res) => {
  try {
    const deleted = await WaterReport.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Reading not found" });
    }
    res.json({ message: "Reading deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
