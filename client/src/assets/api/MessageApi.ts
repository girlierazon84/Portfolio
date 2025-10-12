import axios from "axios";

const MessageApi = axios.create({
    // baseURL: "https://portfolio-0alb.onrender.com/api", // ✅ full backend URL- works for local dev
    baseURL: process.env.REACT_APP_API_BASE_URL || "https://portfolio-0alb.onrender.com/api", // ✅ works for both local dev and deployed frontend
    headers: {
        "Content-Type": "application/json",
    },
});

export default MessageApi;
