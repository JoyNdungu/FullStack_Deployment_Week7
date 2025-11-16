import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import waterReportRoutes from "./routes/waterReportRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
// Corrected path to match your endpoints
app.use("/api/readings", waterReportRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);



// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
