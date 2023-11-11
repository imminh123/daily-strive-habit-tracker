import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

export interface ILog {
  user: ObjectId;
  task: ObjectId;
  completed: boolean;
}

const LogSchema = new Schema<ILog>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    task: { type: Schema.Types.ObjectId, ref: "Task" },
    completed: Boolean,
  },
  {
    timestamps: true,
  },
);

export const LogModel = mongoose.model("Log", LogSchema);
