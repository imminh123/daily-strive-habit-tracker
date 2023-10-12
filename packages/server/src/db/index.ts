import mongoose from "mongoose";
import CONFIG from "@/config";

export const connectDatabase = async () => {
  return mongoose
    .connect(CONFIG.APP.MONGODB_URI as string)
    .then(() => console.log("Connected to MongoDB..."))
    .catch((err: any) => console.error("Could not connect to MongoDB...", err));
};
