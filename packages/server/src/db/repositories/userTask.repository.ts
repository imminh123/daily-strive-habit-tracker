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
    console.log("REPO HERE");

    return this.model.findByIdAndUpdate(id, data, { new: true }).exec(); //should it be findoneandupdate for small updates?
  }

  // delete a UserTask
  async delete(id: String): Promise<IUserTask | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
  //update multiple UserTasks
  async updateTasks(
    filters: FilterQuery<IUserTask>,
    data: any,
  ): Promise<any | null> {
    return this.model.updateMany(filters, data, { new: true }).exec();
  }
}
