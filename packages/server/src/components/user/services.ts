import { UserRepository } from "@/db/repositories/user.repository";
import { IUser, UserModel } from "@/db/models/user.model";

export class UserServices {
  userRepository!: UserRepository;

  constructor() {
    this.userRepository = new UserRepository(UserModel);
  }

  /**
   * @description Get application information.
   * @returns AppInformation
   */

  getUsers = (): Promise<IUser[] | null> => {
    return this.userRepository.find({});
  };

  getUser = (id: string): Promise<IUser | null> => {
    return this.userRepository.findById(id);
  };

  createUser = (data: IUser): Promise<IUser | null> => {
    return this.userRepository.create(data);
  };

  deleteUser = (_id: String): Promise<IUser | null> => {
    return this.userRepository.delete(_id);
  };

  updateUser = (_id: String, data: IUser): Promise<IUser | null> => {
    return this.userRepository.update(_id, data);
  };
}
