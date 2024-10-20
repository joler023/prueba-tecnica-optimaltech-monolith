import axios from "axios";

const headers: {
  [key: string]: string;
} = {
  "Content-Type": "application/json",
};

const BASE_URL = import.meta.env.VITE_BASE_URL as string;

console.log("BASE_URL", BASE_URL);

export const http = axios.create({
  baseURL: BASE_URL,
  headers,
});

