// client/src/api/messageApi.ts

import axios from "axios";


// Determine the base URL for the API
const baseURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Create an Axios instance with the base URL and default headers
const messageApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Log the base URL to verify it's set correctly
console.log("✅ API Base URL:", baseURL);

export default messageApi;
