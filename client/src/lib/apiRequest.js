import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-mern-app-woad.vercel.app/",
  withCredentials: true,
});

export default apiRequest;
