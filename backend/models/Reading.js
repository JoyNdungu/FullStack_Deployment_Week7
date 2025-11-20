// backend/models/Reading.js
import mongoose from "mongoose";

const readingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  units: { type: Number, required: true },
  cost: { type: Number, required: true },
});

export default mongoose.model("Reading", readingSchema);
