// server/src/routes/messageRoutes.ts

import { Router } from "express";
import {
    createMessage,
    getMessages,
    updateMessageStatus,
    deleteMessage
} from "../controllers/messageController";
import { authMiddleware } from "../middlewares/authMiddleware";


const router = Router();

// Public: create a new message
router.post("/messages", createMessage);

// Admin: fetch all messages
router.get("/messages", authMiddleware, getMessages);

// Admin: update read status
router.patch("/messages/:id", authMiddleware, updateMessageStatus);

// Admin: delete message
router.delete("/messages/:id", authMiddleware, deleteMessage);

export default router;
