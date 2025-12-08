// client/src/api/interface/messageInterface.ts

export interface IMessage {
    _id?: string;       // MongoDB ObjectId (optional if not created yet)
    name: string;
    email: string;
    message: string;
    isRead: boolean;
    createdAt: Date;
    updatedAt: Date;
}
