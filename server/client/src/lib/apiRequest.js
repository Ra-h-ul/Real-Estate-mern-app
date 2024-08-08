import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://hotel-booking-react-app-6laf.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
