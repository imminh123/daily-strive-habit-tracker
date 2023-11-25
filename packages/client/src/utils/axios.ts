import axios from "axios";
import { APP_CONFIG } from "../config";

export const api = axios.create({
  baseURL: APP_CONFIG.API_BASE_URL,
});
