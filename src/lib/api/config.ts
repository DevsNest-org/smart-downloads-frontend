import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";
const LIVE_API_BASE_URL = "https://api.smartdownloads.online/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
