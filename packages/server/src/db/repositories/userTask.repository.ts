import { FilterQuery, Model, QueryOptions } from "mongoose";
import { IUserTask } from "../models/userTask.model";

export class UserTaskRepository {
  private model: Model<IUserTask>;

  constructor(model: Model<IUserTask>) {
    this.model = model;
  }

  // create a new UserTask
  async create(data: IUserTask): Promise<IUserTask> {
    return this.model.create(data);
  }

  // find userTasks
  async find(
    filters: FilterQuery<IUserTask>,
    options?: QueryOptions,
  ): Promise<IUserTask[] | null> {
    console.log(
      "🚀 ~ file: userTask.repository.ts:21 ~ UserTaskRepository ~ options:",
      options,
    );
    console.log(
      "🚀 ~ file: userTask.repository.ts:21 ~ UserTaskRepository ~ filters:",
      filters,
    );

    return this.model.find(filters, null, options).exec();
  }

  // find a UserTask by id
  async findById(id: string): Promise<IUserTask | null> {
    return this.model.findById(id).exec();
  }

  // find a UserTask by userTaskname
  async findByUserTaskname(userTaskname: string): Promise<IUserTask | null> {
    return this.model.findOne({ userTaskname }).exec();
  }

  // update a UserTask
  async update(id: string, data: IUserTask): Promise<IUserTask | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // delete a UserTask
  async delete(id: String): Promise<IUserTask | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
