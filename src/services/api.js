import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Menu
export const getMenu = (category) =>
  api.get("/menu", { params: category ? { category } : {} });

export const getBestSellers = () => api.get("/menu/best-sellers");

// Testimonials
export const getTestimonials = () => api.get("/testimonials");

// Reservation
export const createReservation = (data) => api.post("/reservations", data);

// Contact
export const sendContact = (data) => api.post("/contact", data);

export default api;
