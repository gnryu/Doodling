import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const API_TOKEN = "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";
const HuggingFaceAPI = axios.create({
  baseURL: "https://api-inference.huggingface.co/models/masibasi/doodling-ai",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
