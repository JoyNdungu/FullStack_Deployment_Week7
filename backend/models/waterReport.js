import mongoose from "mongoose";

const waterReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  units: {
    type: Number,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const WaterReport = mongoose.model("WaterReport", waterReportSchema);

export default WaterReport;
