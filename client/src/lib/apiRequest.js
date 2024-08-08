import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-mern-app-1b88.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
