import { FilterQuery, Model, QueryOptions } from "mongoose";
import { ITopic } from "../models/topic.model";

export class TopicRepository {
  private model: Model<ITopic>;

  constructor(model: Model<ITopic>) {
    this.model = model;
  }

  // create a new Topic
  async create(data: ITopic): Promise<ITopic> {
    return this.model.create(data);
  }

  // find topics
  async find(
    filters: FilterQuery<ITopic>,
    options?: QueryOptions,
  ): Promise<ITopic[] | null> {
    return this.model.find(filters, null, options).exec();
  }

  // find a Topic by id
  async findById(id: string): Promise<ITopic | null> {
    return this.model.findById(id).exec();
  }

  // find a Topic by topicname
  async findByTopicname(topicname: string): Promise<ITopic | null> {
    return this.model.findOne({ topicname }).exec();
  }

  // update a Topic
  async update(id: string, data: ITopic): Promise<ITopic | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // delete a Topic
  async delete(id: String) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
