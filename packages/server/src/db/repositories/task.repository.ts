import { FilterQuery, Model, QueryOptions } from "mongoose";
import { ITask } from "../models/task.model";

export class TaskRepository {
  private model: Model<ITask>;

  constructor(model: Model<ITask>) {
    this.model = model;
  }

  // create a new Task
  async create(data: ITask): Promise<ITask> {
    return this.model.create(data);
  }

  // find tasks
  async find(
    filters: FilterQuery<ITask>,
    options?: QueryOptions,
  ): Promise<ITask[] | null> {
    return this.model.find(filters, null, options).exec();
  }

  // find a Task by id
  async findById(id: string): Promise<ITask | null> {
    return this.model.findById(id).exec();
  }

  // find a Task by taskname
  async findByTaskname(taskname: string): Promise<ITask | null> {
    return this.model.findOne({ taskname }).exec();
  }

  // update a Task
  async update(id: string, data: ITask): Promise<ITask | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // delete a Task
  async delete(id: String) {
    return this.model.findByIdAndDelete(id).exec();
  }
}
