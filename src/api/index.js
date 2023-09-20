import axios from "axios";

const baseURL = "http://localhost:4000/api/v1";
const API = axios.create({
  baseURL: baseURL,
  timeout: 20000,
  headers: {
    Accept: "*/*",
    "Content-Type": "application/json",
  },
});

export default API