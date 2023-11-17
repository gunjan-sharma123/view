import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7170",
});

export default instance;
export const baseURL = "https://localhost:7170";
