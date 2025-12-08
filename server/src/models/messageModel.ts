// server/src/models/messageModel.ts

import mongoose, { Schema, Document } from "mongoose";


/**----------------------------------------------------------------
    Mongoose schema and interface for storing contact messages.
-------------------------------------------------------------------*/
export interface IMessage extends Document {
    name: string;
    email: string;
    message: string;
    isRead: boolean;
}

// Mongoose Schema
const MessageSchema = new Schema<IMessage>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        message: { type: String, required: true },
        isRead: { type: Boolean, default: false }
    },
    { timestamps: true }
);

export default mongoose.model<IMessage>("Message", MessageSchema);
