import express from "express";
import { verifyToken } from "../middleware/auth.js";
import Reading from "../models/Reading.js";

const router = express.Router();

// GET readings
router.get("/", verifyToken, async (req, res) => {
  try {
    const readings = await Reading.find();
    res.json({ readings });
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch readings" });
  }
});

// POST reading
router.post("/", verifyToken, async (req, res) => {
  try {
    const newReading = new Reading(req.body);
    const saved = await newReading.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ message: "Failed to save reading" });
  }
});

export default router;
