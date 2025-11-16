import express from "express";
import { getReadings, addReading, deleteReading } from "../controllers/waterReportController.js";

const router = express.Router();

router.get("/", getReadings);
router.post("/", addReading);
router.delete("/:id", deleteReading);

export default router;
