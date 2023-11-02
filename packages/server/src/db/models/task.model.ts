import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

export interface ITask {
  name: string;
  currentProgress: Number;
  maxProgress: Number;
  description: string;
  notificationToggle: boolean;
  notificationTime: Date;
  topic: ObjectId;
  completed: boolean;
}

const TaskSchema = new Schema<ITask>(
  {
    name: String,
    currentProgress: Number,
    maxProgress: Number,
    description: String,
    notificationToggle: Boolean,
    notificationTime: Date,
    topic: { type: Schema.Types.ObjectId, ref: "Topic" },
    completed: Boolean,
  },
  {
    timestamps: true,
  },
);

export const TaskModel = mongoose.model("Task", TaskSchema);
