import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import waterReportRoutes from "./routes/waterReportRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());        // security headers
app.use(morgan("dev"));   // request logging

// Root route (friendly message)
app.get("/", (req, res) => {
  res.send("MajiTrack API is running...");
});

// Health check (important for Render)
app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// API routes
app.use("/api/readings", waterReportRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 10000,  // avoid hanging during connection
    maxPoolSize: 10,                  // connection pooling
  })
  .then(() => console.log("MongoDB connected successfully 🎉"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Start server
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT} 🚀`)
);
