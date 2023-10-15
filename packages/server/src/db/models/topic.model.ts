import mongoose from "mongoose";
const { Schema } = mongoose;

export interface ITopic {
  name: string;
  progress: Number;
}

const TopicSchema = new Schema<ITopic>({
  name: String,
  progress: Number,
}, 
{
  timestamps: true,
},);

export const TopicModel = mongoose.model("Topic", TopicSchema);
