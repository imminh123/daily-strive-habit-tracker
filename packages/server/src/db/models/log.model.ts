import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

export interface ITask {
  user : ObjectId;
  topic: ObjectId;
}

const LogSchema = new Schema<ITask>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    topic: { type: Schema.Types.ObjectId, ref: "Topic" },
  },
  {
    timestamps: true,
  },
);

export const LogModel = mongoose.model("Log", LogSchema);
