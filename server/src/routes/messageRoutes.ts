// src/routes/messageRoutes.ts
import { Router } from "express";
import { createMessage, getMessages } from "../controllers/messageController";

const router = Router();

// POST -> create new message
router.post("/messages", createMessage);

// GET -> fetch all messages (optional, good for testing)
router.get("/messages", getMessages);

export default router;
