import { FilterQuery, Model, QueryOptions } from "mongoose";
import { ILog } from "../models/log.model";

export class LogRepository {
  private model: Model<ILog>;

  constructor(model: Model<ILog>) {
    this.model = model;
  }

  // create a new Log
  async create(data: ILog): Promise<ILog> {
    return this.model.create(data);
  }

  // find logs
  async find(
    filters: FilterQuery<ILog>,
    options?: QueryOptions,
  ): Promise<ILog[] | null> {
    return this.model.find(filters, null, options).exec();
  }

  // find a Log by id
  async findById(id: string): Promise<ILog | null> {
    return this.model.findById(id).exec();
  }

  // find a Log by logname
  /* async findByLogname(logname: string): Promise<ILog | null> {
    return this.model.findOne({ logname }).exec();
  } */

  // update a Log
  /*  async update(id: string, data: ILog): Promise<ILog | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  } */

  // delete a Log
  /*  async delete(id: String): Promise<ILog | null> {
    return this.model.findByIdAndDelete(id).exec();
  } */
}
