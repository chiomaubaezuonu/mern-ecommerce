import axios from "axios";

const API = axios.create({
    // baseURL: "https://mern-ecommerce-ngdf.onrender.com"
    baseURL: "http://localhost:5000"
})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default API;