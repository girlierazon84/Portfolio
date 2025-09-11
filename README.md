# 🌐 Portfolio - MERN Stack

A modern, minimalistic, and professional **portfolio website** built with the **MERN stack** (MongoDB, Express, React, Node.js + TypeScript).

---

## 🚀 Features
- ⚡ Fast & responsive frontend (React + TypeScript)
- 📂 Showcases projects, skills, and experience
- 📬 Contact form for visitors to send messages
- 🔑 Admin dashboard to manage (read/update/delete) messages
- 🛡️ Optional admin authentication for security
- 🎨 Minimalistic design, mobile-friendly

---

## 🏗️ Project Structure
PORTFOLIO_MERN/
│── client/ # React + TypeScript frontend
│── server/ # Express + TypeScript backend (API + MongoDB)
│── .gitignore
│── README.md
│── docker-compose.yml


---

## ⚙️ Installation & Setup (Local Development)

### 1. Clone Repository
`bash
git clone https://github.com/yourusername/portfolio-mern.git
cd portfolio-mern`

---

### 2. Install Dependencies
`
###### Backend
cd server
npm install

###### Frontend
cd ../client
npm install
`

---

### 3. Environment Variables
Create a .env file in both client and server:
<u>server/.env</u>
`PORT=5000
MONGO_URI=your_mongodb_connection_string
ADMIN_USER=admin
ADMIN_PASS=supersecret`

client/.env
`REACT_APP_API_URL=http://localhost:5000/api`

---

### 4. Run Development Servers

# Backend
cd server
npm run dev

# Frontend
cd ../client
npm start

---

📬 Contact Form Workflow
1. Visitor submits message → stored in MongoDB
2. Admin logs in → views, updates, deletes messages

---

🚀 Deployment
🔹 Deploy Backend (Server) on Render
1. Create an account at Render.
2. Create a new Web Service.
3. Connect your GitHub repo and choose the server folder.
4. Set Build Command:

`npm install && npm run build`

and Start Command:

`npm run start`

---

### 5. Add Environment Variables in Render:
PORT=10000 (Render provides port automatically)
MONGO_URI=your_mongodb_connection_string
ADMIN_USER=admin
ADMIN_PASS=supersecret

---

### 6. Deploy → You’ll get a URL like:
`https://portfolio-server.onrender.com`

---

🔹 Deploy Frontend (Client) on Vercel
1. Create an account at Vercel.
2. Import your GitHub repo and choose the client folder.
3. Add Environment Variables in Vercel:

`REACT_APP_API_URL=https://portfolio-server.onrender.com/api`

---

### 4. Vercel will build and deploy automatically.

---

### 5. You’ll get a URL like:

`https://portfolio-client.vercel.app`

---

🔹 Deploy Full Stack with Docker (VPS: DigitalOcean, AWS, etc.)
---

### 1. Create Dockerfile for Server (server/Dockerfile)

`FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start"]
`

---

### 2. Create Dockerfile for Client (client/Dockerfile)

`FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

---

# Serve static files using Nginx
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
`

---

### 3. Create docker-compose.yml (in project root)

`version: "3.9"
services:
  server:
    build: ./server
    container_name: portfolio_server
    restart: always
    ports:
      - "5000:5000"
    env_file:
      - ./server/.env
    depends_on:
      - mongo

  client:
    build: ./client
    container_name: portfolio_client
    restart: always
    ports:
      - "3000:80"
    env_file:
      - ./client/.env
    depends_on:
      - server

  mongo:
    image: mongo:6
    container_name: portfolio_mongo
    restart: always
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:
`

---

### 4. Build & Run with Docker

`docker-compose up --build -d`

--- 

### 5. Access Services
1. Frontend → http://your-vps-ip:3000
2. Backend → http://your-vps-ip:5000/api
3. MongoDB → exposed at 27017 (or connect via MongoDB Atlas)

---

### 6. 📄 client/tsconfig.json

`{
  "compilerOptions": {
    "target": "ESNext",                               
    "lib": ["DOM", "DOM.Iterable", "ESNext"],        
    "jsx": "react-jsx",                              
    "module": "ESNext",                              
    "moduleResolution": "Node",                      
    "resolveJsonModule": true,                       
    "esModuleInterop": true,                         
    "allowSyntheticDefaultImports": true,            
    "isolatedModules": true,                         
    "strict": true,                                  
    "forceConsistentCasingInFileNames": true,        
    "skipLibCheck": true,                            
    "noFallthroughCasesInSwitch": true,              
    "noEmit": true                                   
  },
  "include": ["src"],                               
  "exclude": ["node_modules", "build", "dist"]      
}
`

---

🔑 Key Points:

"jsx": "react-jsx" → enables React 17+ JSX Transform (no need to import React in every file).

"strict": true → ensures strong typing (good for professional projects).

"noEmit": true → since React apps use bundlers (Vite/CRA/Webpack), TypeScript shouldn’t emit .js files.

"skipLibCheck": true → speeds up build by skipping type checking of node_modules.

"lib": ["DOM", "DOM.Iterable", "ESNext"] → includes browser APIs + latest ECMAScript.

---

### 7. Perfect 👌 let’s create a comprehensive `db.ts` for your server (Node + Express + TypeScript + MongoDB with Mongoose).

This file will:

Connect to MongoDB Atlas or local MongoDB.

Use dotenv for environment variables.

Include connection events for better debugging.

Handle graceful shutdown.

Export a reusable function `connectDB()`.


#### 📄 server/src/config/db.ts
import mongoose from "mongoose";

/**
 * Establishes a connection to MongoDB using Mongoose.
 * Reads the connection string from environment variables (MONGO_URI).
 */
export const connectDB = async (): Promise<void> => {
  const mongoUri = process.env.MONGO_URI as string;

  if (!mongoUri) {
    console.error("❌ MONGO_URI is not defined in environment variables.");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri, {
      dbName: process.env.DB_NAME || "portfolio_db",
    });

    console.log("✅ MongoDB connected successfully");

    // Debug connection events
    mongoose.connection.on("connected", () => {
      console.log("📡 Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Mongoose disconnected");
    });

    // Graceful shutdown (for Docker, VPS, etc.)
    process.on("SIGINT", async () => {
      await mongoose.connection.close();
      console.log("🔌 Mongoose connection closed due to app termination");
      process.exit(0);
    });
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
`

---

### 📄 Example `.env` for Server
`PORT=5000
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net
DB_NAME=portfolio_db
ADMIN_USER=admin
ADMIN_PASS=supersecret
`

---

## ✅ With this setup, you now have:
1. `messageModel.ts` → defines the schema
2. `messageController.ts` → handles CRUD logic
3. `messageRoutes.ts` → defines routes
4. `authMiddleware.ts` → protects admin routes

### 📄 server/src/models/messageModel.ts
This schema will store:
1. Visitor’s name, email, and message
2. Timestamps for when the message was created/updated
3. Read status (so you can track which messages you’ve checked)

`import mongoose, { Schema, Document } from "mongoose";

/**
 * Interface representing a contact message document.
 */
export interface IMessage extends Document {
  name: string;
  email: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Mongoose schema for storing contact form messages.
 */
const messageSchema: Schema<IMessage> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email address"],
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: 2000,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const Message = mongoose.model<IMessage>("Message", messageSchema);
`

---

### 📌 Example CRUD Operations with the Model
#### `messageController.ts`

`import { Request, Response } from "express";
import { Message } from "../models/messageModel";

// @desc Create a new message
export const createMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = await Message.create({ name, email, message });
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to send message" });
  }
};

// @desc Get all messages (admin only)
export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// @desc Mark message as read/unread
export const updateMessageStatus = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { isRead } = req.body;

    const updatedMessage = await Message.findByIdAndUpdate(
      id,
      { isRead },
      { new: true }
    );

    res.json(updatedMessage);
  } catch (error) {
    res.status(500).json({ error: "Failed to update message status" });
  }
};

// @desc Delete a message
export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    await Message.findByIdAndDelete(id);
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete message" });
  }
};
`

---

### 📌 Example Routes: `messageRoutes.ts`

`import express from "express";
import {
  createMessage,
  getMessages,
  updateMessageStatus,
  deleteMessage,
} from "../controllers/messageController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = express.Router();

// Public route (any visitor can send message)
router.post("/", createMessage);

// Admin routes (protected)
router.get("/", authMiddleware, getMessages);
router.patch("/:id", authMiddleware, updateMessageStatus);
router.delete("/:id", authMiddleware, deleteMessage);

export default router;
`

---

### 📌 authMiddleware.ts

import { Request, Response, NextFunction } from "express";

/**
 * Basic admin authentication middleware
 * Uses ADMIN_USER and ADMIN_PASS from environment variables.
 */
export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Unauthorized: Missing credentials" });
  }

  const base64Credentials = authHeader.split(" ")[1];
  const [username, password] = Buffer.from(base64Credentials, "base64")
    .toString()
    .split(":");

  if (
    username === process.env.ADMIN_USER &&
    password === process.env.ADMIN_PASS
  ) {
    return next();
  }

  return res.status(403).json({ error: "Forbidden: Invalid credentials" });
};
`

---

### Awesome 🚀 Let’s tie everything together into a ready-to-use Express app.
###### This `App.ts` will:
1. Load dotenv config
2. Initialize Express
3. Connect to MongoDB via db.ts
4. Register routes (messages API, etc.)
5. Include error handling middleware
6. Be clean and production-ready

---

#### 📄 server/src/App.ts
import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db";
import messageRoutes from "./routes/messageRoutes";

// Load environment variables
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Health check route
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Portfolio API is running 🚀" });
});

// Routes
app.use("/api/messages", messageRoutes);

// Global error handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("❌ Global error:", err.message);
  res.status(500).json({ error: "Something went wrong, please try again." });
});

// Connect DB
connectDB();

export default app;
`

---

### ✅ Project Flow
1. `Server.ts` → starts server on given port
2. `App.ts` → sets up Express + middleware + routes + error handler
3. `db.ts` → connects to MongoDB
4. `messageRoutes.ts` → API endpoints for contact messages
5. `authMiddleware.ts` → protects admin routes
6. `messageController.ts` → business logic
7. `messageModel.ts` → defines schema

---

🔗 Connecting Frontend & Backend
1. In client/.env, ensure REACT_APP_API_URL points to your Render backend:

`REACT_APP_API_URL=https://portfolio-server.onrender.com/api`


📌 Roadmap
1. Add animations & transitions
2. Dark mode toggle
3. Blog or project CMS
4. SEO improvements


📜 License
MIT License © 2025 Girlie Razon