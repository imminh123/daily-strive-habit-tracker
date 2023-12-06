import axios from "axios";
import { APP_CONFIG } from "../config";

let user;
if (typeof window !== "undefined") {
  user = localStorage.getItem("auth");
}
export const api = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
  headers: {
    "x-user-id": user && JSON.parse(user)._id,
  },
});
