// server/src/index.ts

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import { connectDB } from "./config/db";
import messageRoutes from "./routes/messageRoutes";
import healthRoutes from "./routes/healthRoutes";

// ==================================
// 🌿 Load environment variables
// ==================================
dotenv.config({ path: ".env.local" });

// ==========================
// 🛠️ Express App Setup
// ==========================
const app = express();
const PORT = process.env.PORT || 5000;

// ==========================
// 🧩 MongoDB Connection
// ==========================
connectDB();

// ==========================
// 🌍 CORS Configuration
// ==========================
const allowedOrigins = [
    process.env.CLIENT_URL, // e.g. https://gqr-portfolio.vercel.app
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://portfolio-kxgvlj7gu-girlies-projects.vercel.app",
    "https://portfolio-f3so87wuc-girlies-projects.vercel.app",
    "https://portfolio-cgtmbmkqr-girlies-projects.vercel.app",
    "https://gqr-portfolio.vercel.app"
].filter(Boolean) as string[];

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true
    })
);

// ==========================
// 🧱 Middleware & Routes
// ==========================
app.use(express.json());
app.use(morgan("dev"));

app.use("/api", messageRoutes);
app.use("/api/health", healthRoutes);

// Simple root endpoint
app.get("/", (_req, res) => {
    res.send("✅ Portfolio API is running and MongoDB connection is stable!");
});

// ==========================
// 🚀 Start Server
// ==========================
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
