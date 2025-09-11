import { Request, Response, NextFunction } from "express";


/** Basic admin authentication via Authorization: Basic <base64> */
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
const authHeader = req.headers.authorization;
if (!authHeader || !authHeader.startsWith("Basic ")) {
return res.status(401).json({ error: "Unauthorized: Missing credentials" });
}


const base64Credentials = authHeader.split(" ")[1];
const [username, password] = Buffer.from(base64Credentials, "base64").toString().split(":");


if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
return next();
}


return res.status(403).json({ error: "Forbidden: Invalid credentials" });
};