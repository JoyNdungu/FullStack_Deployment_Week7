import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
// Ensure you have created this file, or comment it out if not ready yet
import readingsRoutes from "./routes/readings.js"; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes); 
app.use("/api/readings", readingsRoutes);

// Basic root endpoint
app.get("/", (req, res) => res.send("MajiTrack API running"));

// Connect to MongoDB and start server
const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
        console.error("Error: MONGO_URI not found in .env file");
        process.exit(1);
    }
    
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
    
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error("DB connection error:", err);
    process.exit(1);
  }
};

start();