import axios from "axios";

const MessageApi = axios.create({
    // baseURL: "http://localhost:5000/api", // ✅ full backend URL- works for local dev
    baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:5000/api", // ✅ works for both local dev and deployed frontend
    headers: {
        "Content-Type": "application/json",
    },
});

console.log("✅ API Base URL:", process.env.REACT_APP_API_BASE_URL);

export default MessageApi;
