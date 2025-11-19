// models/waterReport.js
import mongoose from "mongoose";

const waterReportSchema = mongoose.Schema({
  date: { type: String, required: true },
  units: { type: Number, required: true },
  cost: { type: Number, required: true },
});

// Explicitly use the 'readings' collection
const WaterReport = mongoose.model("WaterReport", waterReportSchema, "readings");

export default WaterReport;
