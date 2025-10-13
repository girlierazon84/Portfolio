// src/server.ts
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ MongoDB connection
mongoose
    .connect(process.env.MONGO_URI as string, {
        dbName: process.env.DB_NAME,
    })
    .then(() => console.log("✅ Connected to MongoDB Atlas successfully!"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Updated CORS Configuration
const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://portfolio-kxgvlj7gu-girlies-projects.vercel.app", // ✅ your current Vercel deployment
    "https://portfolio-f3so87wuc-girlies-projects.vercel.app", // old deployment
    "https://portfolio-cgtmbmkqr-girlies-projects.vercel.app", // old deployment
    "https://gqr-portfolio.vercel.app", // previous version
];

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

// ✅ Middleware
app.use(express.json());

// ✅ Routes
app.use("/api", messageRoutes);

// ✅ Health check route
app.get("/", (_req, res) => {
    res.send("✅ API is running and connected to MongoDB Atlas");
});

// ✅ Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
