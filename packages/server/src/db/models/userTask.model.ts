import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

export interface IUserTask {
  name: string;
  description: string;
  currentProgress: Number;
  maxProgress: Number;
  completed: boolean;
  streak: Number;
  notificationToggle: boolean;
  notificationTime: Date;
  isNotified: boolean;
  user: ObjectId;
  topic: ObjectId;
}

const UserTaskSchema = new Schema<IUserTask>(
  {
    name: String,
    currentProgress: Number,
    maxProgress: Number,
    description: String,
    notificationToggle: Boolean,
    notificationTime: Date,
    streak: Number,
    completed: Boolean,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    topic: { type: Schema.Types.ObjectId, ref: "Topic" },
  },
  {
    timestamps: true,
  },
);

export const UserTaskModel = mongoose.model("UserTask", UserTaskSchema);
