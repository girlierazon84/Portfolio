// server/src/routes/healthRoutes.ts

import { Router } from "express";
import { getDBStatus } from "../config/db";


const router = Router();

/**-----------------------------------------------------------------
    Health check endpoint to verify service and database status.
--------------------------------------------------------------------*/
router.get("/", (_req, res) => {
    // Check database connection status
    const dbStatus = getDBStatus();

    // Respond with service health information
    res.json({
        service: "Portfolio API",
        uptime: process.uptime(),
        db: dbStatus
    });
});

export default router;
