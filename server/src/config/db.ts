// server/src/config/db.ts

import mongoose from "mongoose";


/**-----------------------------------------------------------
    Resolve Mongo URI with a safe fallback in development.
--------------------------------------------------------------*/
const getMongoUri = (): string => {
    // Check for MONGO_URI in environment variables
    const fromEnv = process.env.MONGO_URI;

    // Use the environment variable if available
    if (fromEnv) {
        return fromEnv;
    }

    // Fallback for local development if env is missing
    if (process.env.NODE_ENV !== "production") {
        const fallback = "mongodb://localhost:27017/portfolio_db"; // ✅ fixed typo
        console.warn(
            "⚠️  MONGO_URI is not set. Falling back to local MongoDB:",
            fallback
        );
        return fallback;
    }

    // In production we *require* MONGO_URI
    console.error("❌ MONGO_URI is not defined in environment variables.");
    process.exit(1);
};

/**--------------------------------------------------------
    Establishes a connection to MongoDB using Mongoose.
-----------------------------------------------------------*/
export const connectDB = async (): Promise<void> => {
    // Get the MongoDB URI and database name
    const mongoUri = getMongoUri();
    const dbName = process.env.DB_NAME || "portfolio_db";

    // Attempt to connect to MongoDB
    try {
        await mongoose.connect(mongoUri, { dbName });

        // Log successful connection
        console.log(`✅ MongoDB connected successfully (db: ${dbName})`);

        // Set up event listeners for the Mongoose connection
        mongoose.connection.on("connected", () => {
            console.log("📡 Mongoose connected to DB");
        });

        // Handle connection errors
        mongoose.connection.on("error", (err) => {
            console.error("❌ Mongoose connection error:", err);
        });

        // Handle disconnection events
        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ Mongoose disconnected");
        });

        // Gracefully close the Mongoose connection on app termination
        process.on("SIGINT", async () => {
            await mongoose.connection.close();
            console.log("🔌 Mongoose connection closed due to app termination");
            process.exit(0);
        });
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

/**----------------------------------------------------------
    Returns the current status of the MongoDB connection.
-------------------------------------------------------------*/
export const getDBStatus = (): { status: string; host?: string } => {
    // Get the current connection state
    const state = mongoose.connection.readyState;

    // Map the connection state to a human-readable status
    switch (state) {
        case 1:
            return { status: "connected", host: mongoose.connection.host };
        case 2:
            return { status: "connecting" };
        case 3:
            return { status: "disconnecting" };
        default:
            return { status: "disconnected" };
    }
};
