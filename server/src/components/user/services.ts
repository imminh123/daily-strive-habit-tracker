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

  createUser = (data: IUser): Promise<IUser | null> => {
    return this.userRepository.create(data);
  };
}
