// controllers/waterReportController.js
import WaterReport from "../models/waterReport.js";

// GET all readings
export const getReadings = async (req, res) => {
  try {
    const readings = await WaterReport.find();
    res.json(readings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ADD a new reading
export const addReading = async (req, res) => {
  const { date, units, cost } = req.body;
  try {
    const reading = new WaterReport({ date, units, cost });
    const newReading = await reading.save();
    res.status(201).json(newReading);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE a reading
export const deleteReading = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await WaterReport.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Reading not found" });
    res.json({ message: "Reading deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
