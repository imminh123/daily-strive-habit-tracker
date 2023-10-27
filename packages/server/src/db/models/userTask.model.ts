import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

export interface IUserTask {
  name: string;
  currentProgress: Number;
  maxProgress: Number;
  description: string;
  notificationToggle: boolean;
  notificationMinute: Number;
  notificationHour: Number;
  notificationDay: Number;
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
    notificationMinute: Number,
    notificationHour: Number,
    notificationDay: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    topic: { type: Schema.Types.ObjectId, ref: "Topic" },
  },
  {
    timestamps: true,
  },
);

export const UserTaskModel = mongoose.model("UserTask", UserTaskSchema);
