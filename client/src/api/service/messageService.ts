// client/src/api/services/messageService.ts

import MessageApi from "../messageApi";
import { IMessage } from "../interface/messageInterface";


// Fetch all messages
export const getMessages = async (): Promise<IMessage[]> => {
    const res = await MessageApi.get("/messages");
    return res.data;
};

// Fetch a single message by ID
export const getMessageById = async (id: string): Promise<IMessage> => {
    const res = await MessageApi.get(`/messages/${id}`);
    return res.data;
};

// Create a new message
export const createMessage = async (
    messageData: Omit<IMessage, "_id" | "isRead" | "createdAt" | "updatedAt">
): Promise<IMessage> => {
    const res = await MessageApi.post("/messages", messageData);
    return res.data;
};

// Mark message as read
export const markMessageAsRead = async (id: string): Promise<IMessage> => {
    const res = await MessageApi.patch(`/messages/${id}/read`);
    return res.data;
};

// Delete a message
export const deleteMessage = async (id: string): Promise<void> => {
    await MessageApi.delete(`/messages/${id}`);
};
