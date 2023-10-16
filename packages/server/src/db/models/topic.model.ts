import mongoose, { ObjectId } from "mongoose";
const { Schema } = mongoose;

export interface ITopic {
  name: string;
  progress: Number;
  user: ObjectId;
}

const TopicSchema = new Schema<ITopic>(
  {
    name: String,
    progress: Number,
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  },
);

export const TopicModel = mongoose.model("Topic", TopicSchema);
