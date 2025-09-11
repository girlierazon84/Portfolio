import { Router } from "express";
import { getDBStatus } from "../config/db";

const router = Router();

// Health check endpoint
router.get("/", (req, res) => {
    const dbStatus = getDBStatus();
    res.json({
        service: "Portfolio API",
        uptime: process.uptime(),
        db: dbStatus,
    });
});

export default router;
