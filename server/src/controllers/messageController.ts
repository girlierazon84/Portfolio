import { Request, Response } from "express";
import Message from "../models/messageModel"; // <-- default import

// Create a new message (Public)
export const createMessage = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newMessage = await Message.create({ name, email, message });

        res.status(201).json({
            success: true,
            data: newMessage,
        });
    } catch (error) {
        console.error("Error creating message:", error);
        res.status(500).json({ error: "Server error" });
    }
};

// Get all messages (Admin)
export const getMessages = async (_req: Request, res: Response) => {
    try {
        const messages = await Message.find().sort({ createdAt: -1 });
        return res.json(messages);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to fetch messages" });
    }
};

// Update message read status (Admin)
export const updateMessageStatus = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { isRead } = req.body;

        const updatedMessage = await Message.findByIdAndUpdate(
            id,
            { isRead },
            { new: true }
        );

        if (!updatedMessage)
            return res.status(404).json({ error: "Message not found" });

        return res.json(updatedMessage);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to update message status" });
    }
};

// Delete a message (Admin)
export const deleteMessage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const deleted = await Message.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ error: "Message not found" });

        return res.json({ message: "Message deleted successfully" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Failed to delete message" });
    }
};
