# 🌐 Portfolio – MERN + Next.js

This is my personal, modern, and professional **portfolio website** built with the **MERN stack** (MongoDB, Express, React/Next.js, Node.js) using **TypeScript** and **styled-components** on the frontend.

It’s where I showcase who I am, what I build, and how I work.

---

## ✨ What I Built

I designed this portfolio as a **single cohesive experience** with:

* A **sticky, glassmorphism-style navbar** that stays at the top but doesn’t cover content.
* A **non-fixed, blurred footer** that sits naturally at the bottom of the page.
* A full-screen **Hero** section with my profile, tagline, and CTAs.
* Dedicated **About, Skills, Projects, and Contact** sections.
* A detailed **project page** for my TrichMind thesis (ML + MERN).
* A **full contact flow** backed by a MongoDB/Express API, with admin functionality.

All sections reuse a blurred **data-science background image** for a consistent, minimal, and modern feel across mobile and desktop.

---

## 🚀 Features

### 🖥 Frontend & Layout (Next.js + TypeScript + styled-components)

* **Next.js (App Router) + TypeScript** frontend in `/client`.
* **Sticky navbar** with a blurred DS background and:

  * Desktop links to Home, About, Skills, Projects, Contact.
  * Mobile menu with a **circular hamburger button** (icon centered in a glassy circle).
* **Non-fixed footer**:

  * Uses the same blurred DS background.
  * Shows my name, roles, tagline, and social icons (GitHub, LinkedIn, Email).
* **Responsive sections**:

  * `Hero` – profile image, name, roles, and buttons (Get in Touch, Download CV, Download Cover Letter).
  * `About` – who I am, what I do, and my background.
  * `Skills` – cards with icons, progress bars, and levels (Python, ML, MERN stack, BI, etc.).
  * `Projects` – grid of capstone projects (Python, R, Deep Learning, Streamlit, Power BI, MERN, etc.).
  * `Contact` – a glassy contact card with form (name, email, message).
  * `TrichMind` – in-depth project page with charts, mockups, and explanations.
* **Framer Motion animations**:

  * Smooth fade-ins and subtle transitions for sections, buttons, and icons.
* **Glassmorphism**:

  * Blurred overlays on Hero, Skills, Projects, and Contact for both aesthetics and readability.

### 📬 Contact & Admin (Backend API)

* **Contact form** (frontend) posts to my **Express API**.
* Messages are stored in **MongoDB** using **Mongoose**.
* I can secure routes with a simple **admin auth middleware** (using env credentials).
* Admin routes allow me to:

  * List messages.
  * Mark messages as read/unread.
  * Delete messages.

### 🧱 Tech Stack

**Frontend (client):**

* Next.js (React) + TypeScript
* styled-components + custom theme
* Framer Motion
* React Icons / MUI Icons
* Responsive layout with modern design patterns

**Backend (server):**

* Node.js + Express + TypeScript
* MongoDB + Mongoose
* dotenv, cors, morgan
* Simple Basic Auth for admin routes

**DevOps & Deployment:**

* Vercel (frontend)
* Render (backend)
* Docker + docker-compose for full-stack deployment on a VPS

---

## 🏗️ Project Structure

```bash
PORTFOLIO/
│── client/          # Next.js + TypeScript frontend (App Router)
│── server/          # Express + TypeScript backend (API + MongoDB)
│── .gitignore
│── README.md
│── docker-compose.yml
│── package.json
```

### 🧭 Client (Next.js)

Pages & components are structured around the sections in my portfolio:

* `client/src/app/layout.tsx` – wraps the entire UI with:

  * `<Navbar />` (sticky)
  * `<main className="page-content">...</main>`
  * `<Footer />` (non-fixed)
* `client/src/app/page.tsx` – home page that stitches together:

  * `<Hero />`
  * `<About />`
  * `<Skills />`
  * `<Projects />`
  * `<Contact />`
* `client/src/app/about/page.tsx` – About page.
* `client/src/app/skills/page.tsx` – Skills page.
* `client/src/app/projects/page.tsx` – Projects page.
* `client/src/app/projects/trichmind/page.tsx` – TrichMind project detail page.
* `client/src/app/contact/page.tsx` – Contact page.
* `client/src/components/*` – Navbar, Footer, Hero, About, Skills, Projects, Contact, project layouts.
* `client/src/assets/images/*` – DS background image, profile pictures, app mockups, and charts.
* `client/src/styles/theme.ts` + `styled.d.ts` – theme object and TS typing for styled-components.

### 🧭 Server (Express API)

* `server/src/config/db.ts` – MongoDB connection via Mongoose.
* `server/src/models/messageModel.ts` – schema for contact messages.
* `server/src/controllers/messageController.ts` – CRUD logic for messages.
* `server/src/routes/messageRoutes.ts` – API routes for `/api/messages`.
* `server/src/middlewares/authMiddleware.ts` – basic admin auth.
* `server/src/App.ts` – Express app, middleware, health route, API routes, global error handler.
* `server/src/server.ts` – server entrypoint (listens on `PORT`).

---

## ⚙️ Local Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/girlierazon84/Portfolio.git
cd Portfolio
```

---

### 2️⃣ Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

---

### 3️⃣ Environment Variables

I use separate `.env` files for the client and server.

#### `server/.env`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
DB_NAME=portfolio_db
ADMIN_USER=admin
ADMIN_PASS=supersecret
```

#### `client/.env.local` (Next.js)

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

> I use `NEXT_PUBLIC_API_URL` so the frontend knows where to call the backend.

---

### 4️⃣ Run Development Servers

```bash
# Backend (from /server)
npm run dev

# Frontend (from /client)
npm run dev
```

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend: [http://localhost:5000/api](http://localhost:5000/api)

---

## 📬 Contact Form Flow (How My Messages Work)

1. A visitor fills out the contact form (name, email, message) on the **Contact** section.
2. The frontend calls `POST /api/messages` on my Express server.
3. The backend validates & saves the message to MongoDB.
4. Via admin routes, I can:

   * `GET /api/messages` – view all messages.
   * `PATCH /api/messages/:id` – mark as read/unread.
   * `DELETE /api/messages/:id` – remove messages.

All admin routes are protected by a simple **Basic Auth** middleware using `ADMIN_USER` and `ADMIN_PASS`.

---

## 🚢 Deployment

I deploy the stack in a few different ways:

### 🔹 Backend on Render

1. I create a Render account and set up a **Web Service**.
2. I connect my GitHub repo and point it to the `server` folder.
3. Build command:

    ```bash
    npm install && npm run build
    ```

4. Start command:

    ```bash
    npm run start
    ```

5. I set environment variables in Render:

    ```env
    PORT=10000      # Render will assign the actual port internally
    MONGO_URI=your_mongodb_connection_string
    DB_NAME=portfolio_db
    ADMIN_USER=admin
    ADMIN_PASS=supersecret
    ```

6. Render gives me a URL like:

    ```text
    https://portfolio-server.onrender.com
    ```

---

### 🔹 Frontend on Vercel

1. I create a Vercel account.
2. I import my GitHub repo and select the `client` folder as the project root.
3. I add environment variables in Vercel:

    ```env
    NEXT_PUBLIC_API_URL=https://portfolio-server.onrender.com/api
    ```

4. Vercel builds and deploys automatically.

    I end up with a URL like:

    ```text
    https://portfolio-client.vercel.app
    ```

---

### 🔹 Full-Stack Deployment with Docker (VPS: DigitalOcean, AWS, etc.)

#### 1. Server Dockerfile – `server/Dockerfile`

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 5000
CMD ["npm", "run", "start"]
```

#### 2. Client Dockerfile – `client/Dockerfile`

```dockerfile
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Serve static Next.js output (if using next export) or switch approach as needed
FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

> If I keep Next.js in SSR mode, I would containerise it as a Node server instead. For a purely static export, this nginx setup works.

#### 3. `docker-compose.yml` (project root)

```yaml
version: "3.9"
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
      - ./client/.env.local
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
```

#### 4. Build & Run

```bash
docker-compose up --build -d
```

#### 5. Access

* Frontend → `http://your-vps-ip:3000`
* Backend → `http://your-vps-ip:5000/api`
* MongoDB → `your-vps-ip:27017` (or I use Atlas instead of local)

---

## 🛠 Client TypeScript Config (Example)

`client/tsconfig.json` example:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "jsx": "preserve",
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
  "exclude": ["node_modules", ".next", "build", "dist"]
}
```

**Key points:**

* `"strict": true` – I keep strict typing for better reliability.
* `"noEmit": true` – Next.js handles bundling; TypeScript just type-checks.
* `"lib": ["DOM", "DOM.Iterable", "ESNext"]` – I rely on browser APIs + modern JS.
* `"jsx": "preserve"` – recommended for Next.js, which handles JSX at build time.

---

## 🗄 MongoDB Connection – `server/src/config/db.ts`

```ts
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

    mongoose.connection.on("connected", () => {
      console.log("📡 Mongoose connected to DB");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ Mongoose connection error:", err);
    });

    mongoose.connection.on("disconnected", () => {
      console.warn("⚠️ Mongoose disconnected");
    });

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
```

---

## 📨 Message Model – `server/src/models/messageModel.ts`

```ts
import mongoose, { Schema, Document } from "mongoose";

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
```

---

## 🧠 Message Controller – `server/src/controllers/messageController.ts`

```ts
import { Request, Response } from "express";
import { Message } from "../models/messageModel";

// Create a new message
export const createMessage = async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = await Message.create({ name, email, message });
    res.status(201).json(newMessage);
  } catch {
    res.status(500).json({ error: "Failed to send message" });
  }
};

// Get all messages (admin only)
export const getMessages = async (_req: Request, res: Response) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch {
    res.status(500).json({ error: "Failed to fetch messages" });
  }
};

// Mark message as read/unread
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
  } catch {
    res.status(500).json({ error: "Failed to update message status" });
  }
};

// Delete a message
export const deleteMessage = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await Message.findByIdAndDelete(id);
    res.json({ message: "Message deleted successfully" });
  } catch {
    res.status(500).json({ error: "Failed to delete message" });
  }
};
```

---

## 🔐 Admin Auth – `server/src/middlewares/authMiddleware.ts`

```ts
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
```

---

## 🌐 Express App – `server/src/App.ts`

```ts
import express, { Application, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({ message: "Portfolio API is running 🚀" });
});

app.use("/api/messages", messageRoutes);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("❌ Global error:", err.message);
  res.status(500).json({ error: "Something went wrong, please try again." });
});

connectDB();

export default app;
```

---

## 🔗 Connecting Frontend & Backend

On the frontend, my API service uses `NEXT_PUBLIC_API_URL` to send contact data:

```env
NEXT_PUBLIC_API_URL=https://portfolio-server.onrender.com/api
```

Then `createMessage()` in the client calls:

```ts
POST `${process.env.NEXT_PUBLIC_API_URL}/messages`
```

---

## 📍 Roadmap

As I keep improving my portfolio, I plan to:

1. Add **dark mode** with a toggle.
2. Introduce a small **blog / case study** section.
3. Add more **micro-interactions** (hover animations, subtle parallax).
4. Improve **SEO** and structured data.
5. Integrate basic **analytics** to understand traffic.

---

## 📜 License

MIT License © 2025 **Girlie Quindao Razon**
