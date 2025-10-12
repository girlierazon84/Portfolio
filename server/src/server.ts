// src/server.ts
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
    .connect(process.env.MONGO_URI as string, {
        dbName: process.env.DB_NAME,
    })
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// Middleware
app.use(cors({
    origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://gqr-portfolio.vercel.app",
        "https://portfolio-cgtmbmkqr-girlies-projects.vercel.app"  // ✅ Add your actual deployed Vercel URL
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", messageRoutes);
// ✅ Now routes are: POST /api/messages, GET /api/messages

// Health check route
app.get("/", (_req, res) => {
    res.send("✅ API is running...");
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
