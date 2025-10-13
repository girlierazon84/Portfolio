// src/server.ts
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ==========================
// 🧩 MongoDB Connection Logic
// ==========================
const connectToMongoDB = async (retries = 5, delay = 5000) => {
    while (retries) {
        try {
            await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: process.env.DB_NAME,
            });
            console.log("✅ Connected to MongoDB Atlas successfully!");
            break;
        } catch (err) {
            retries -= 1;
            console.error(
                `❌ MongoDB connection failed. Retries left: ${retries}. Retrying in ${delay / 1000}s...`
            );
            console.error("Error details:", err);
            if (!retries) {
                console.error("💀 Could not connect to MongoDB. Exiting...");
                process.exit(1);
            }
            await new Promise((res) => setTimeout(res, delay));
        }
    }
};

connectToMongoDB();

// ==========================
// 🌍 CORS Configuration
// ==========================
const allowedOrigins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "https://portfolio-kxgvlj7gu-girlies-projects.vercel.app", // ✅ your latest Vercel deployment
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

// ==========================
// 🧱 Middleware & Routes
// ==========================
app.use(express.json());
app.use("/api", messageRoutes);

// ==========================
// 🩺 Health Check
// ==========================
app.get("/", (_req, res) => {
    res.send("✅ API is running and MongoDB Atlas connection is stable!");
});

// ==========================
// 🚀 Start Server
// ==========================
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
