import mongoose from "mongoose";
const { Schema } = mongoose;

export interface ITopic {
  name: string;
  description: string;
  imageURL: string;
}

const TopicSchema = new Schema<ITopic>(
  {
    name: String,
    description: String,
    imageURL: String,
  },
  {
    timestamps: true,
  },
);

export const TopicModel = mongoose.model("Topic", TopicSchema);
