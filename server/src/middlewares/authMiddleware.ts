// server/src/middlewares/authMiddleware.ts

import { Request, Response, NextFunction } from "express";


/**-----------------------------------------------------------------
    Basic admin authentication via Authorization: Basic <base64>
--------------------------------------------------------------------*/
export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    // Extract the Authorization header
    const authHeader = req.headers.authorization;

    // Check if the header is present and properly formatted
    if (!authHeader || !authHeader.startsWith("Basic ")) {
        res.status(401).json({ error: "Unauthorized: Missing credentials" });
        return;
    }

    // Decode the base64 encoded credentials
    const base64Credentials = authHeader.split(" ")[1];
    const decoded = Buffer.from(base64Credentials, "base64").toString("utf-8");
    const [username, password] = decoded.split(":");

    // Validate the credentials against environment variables
    if (
        username === process.env.ADMIN_USER &&
        password === process.env.ADMIN_PASS
    ) {
        next();
        return;
    }

    // If credentials are invalid, respond with 403 Forbidden
    res.status(403).json({ error: "Forbidden: Invalid credentials" });
};
