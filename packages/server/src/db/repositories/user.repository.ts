import { FilterQuery, Model, QueryOptions } from "mongoose";
import { IUser } from "../models/user.model";

export class UserRepository {
  private model: Model<IUser>;

  constructor(model: Model<IUser>) {
    this.model = model;
  }

  // create a new User
  async create(data: IUser): Promise<IUser> {
    return this.model.create(data);
  }

  // find users
  async find(
    filters: FilterQuery<IUser>,
    options?: QueryOptions,
  ): Promise<IUser[] | null> {
    return this.model.find(filters, null, options).exec();
  }

  // find a User by id
  async findById(id: string): Promise<IUser | null> {
    return this.model.findById(id).exec();
  }

  // find a User by email
  async findByEmail(email: string): Promise<IUser | null> {
    return this.model.findOne({ email }).exec();
  }

  // find a User by username
  async findByUsername(username: string): Promise<IUser | null> {
    return this.model.findOne({ username }).exec();
  }

  // update a User
  async update(id: string, data: IUser): Promise<IUser | null> {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  // delete a User
  async delete(id: String): Promise<IUser | null> {
    return this.model.findByIdAndDelete(id).exec();
  }
}
