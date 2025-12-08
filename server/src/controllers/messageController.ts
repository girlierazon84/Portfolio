// server/src/controllers/messageController.ts

import { Request, Response } from "express";
import Message from "../models/messageModel";


/**-----------------------------------
    Create a new message (public).
--------------------------------------*/
export const createMessage = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        // Extract message data from request body
        const { name, email, message } = req.body;

        // Basic validation
        if (!name || !email || !message) {
            res.status(400).json({ error: "All fields are required" });
            return;
        }

        // Create and save the new message
        const newMessage = await Message.create({ name, email, message });

        // Respond with the created message
        res.status(201).json({
            success: true,
            data: newMessage
        });
    } catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({ error: "Server error" });
    }
};

/**------------------------------
    Get all messages (admin).
---------------------------------*/
export const getMessages = async (
    _req: Request,
    res: Response
): Promise<void> => {
    try {
        // Fetch all messages, sorted by creation date (newest first)
        const messages = await Message.find().sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        // Handle errors during message retrieval
        console.error("Error fetching messages:", error);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
};

/**----------------------------------------
    Update message read status (admin).
-------------------------------------------*/
export const updateMessageStatus = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        // Extract message ID from URL parameters and read status from request body
        const { id } = req.params;
        const { isRead } = req.body;

        // Update the message's read status
        const updatedMessage = await Message.findByIdAndUpdate(
            id,
            { isRead },
            { new: true }
        );

        // If message not found, respond with 404
        if (!updatedMessage) {
            res.status(404).json({ error: "Message not found" });
            return;
        }

        // Respond with the updated message
        res.json(updatedMessage);
    } catch (error) {
        console.error("Error updating message status:", error);
        res.status(500).json({ error: "Failed to update message status" });
    }
};

/**------------------------------
    Delete a message (admin).
---------------------------------*/
export const deleteMessage = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        // Extract message ID from URL parameters
        const { id } = req.params;

        // Delete the message by ID
        const deleted = await Message.findByIdAndDelete(id);
        if (!deleted) {
            res.status(404).json({ error: "Message not found" });
            return;
        }

        // Respond with success message
        res.json({ message: "Message deleted successfully" });
    } catch (error) {
        console.error("Error deleting message:", error);
        res.status(500).json({ error: "Failed to delete message" });
    }
};
