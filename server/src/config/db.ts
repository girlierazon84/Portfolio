import mongoose from "mongoose";

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Reads URI and DB name from environment variables.
 */
export const connectDB = async (): Promise<void> => {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.error("❌ MONGO_URI is not defined in environment variables.");
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoUri, {
            dbName: process.env.DB_NAME || "portfolio_db",
        });

        console.log("✅ MongoDB connected successfully");

        // Mongoose connection events
        mongoose.connection.on("connected", () => {
            console.log("📡 Mongoose connected to DB");
        });

        mongoose.connection.on("error", (err) => {
            console.error("❌ Mongoose connection error:", err);
        });

        mongoose.connection.on("disconnected", () => {
            console.warn("⚠️ Mongoose disconnected");
        });

        // Graceful shutdown
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

/**
 * Returns the current status of the MongoDB connection.
 */
export const getDBStatus = (): { status: string; host?: string } => {
    const state = mongoose.connection.readyState;

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
