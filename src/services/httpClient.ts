import axios from "axios";

const baseURl = "https://vampay.in/";
const token = "1234567890";

export const axiosWithToken = axios.create({
  baseURL: baseURl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export const axiosWithOutToken = axios.create({
  baseURL: baseURl,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
