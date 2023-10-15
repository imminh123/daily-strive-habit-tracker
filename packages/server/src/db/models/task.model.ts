import mongoose from "mongoose";
const { Schema } = mongoose;

export interface ITask {
  name: string;
  currentProgress: Number;
  maxProgress: Number;
  description: string;
  notificationToggle: boolean;
  notificationMinute: Number;
  notificationHour: Number;
  notificationDay: Number;
}

const TaskSchema = new Schema<ITask>(
  {
    name: String,
    currentProgress: Number,
    maxProgress: Number,
    description: String,
    notificationToggle: Boolean,
    notificationMinute: Number,
    notificationHour: Number,
    notificationDay: Number,
  },
  {
    timestamps: true,
  },
);

export const TaskModel = mongoose.model("Task", TaskSchema);
