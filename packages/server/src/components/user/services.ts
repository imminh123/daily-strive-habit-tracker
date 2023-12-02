import { UserRepository } from "@/db/repositories/user.repository";
import { IUser, UserModel } from "@/db/models/user.model";
import { hash, compare } from "@/utils/crypt";

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

  createUser = async (data: IUser): Promise<IUser | null> => {
    const res = { ...data, password: await hash(data.password) };
    return this.userRepository.create(res);
  };

  findUser = (email: IUser["email"]): Promise<IUser | null> => {
    return this.userRepository.findByEmail(email);
  };
  // find and match user by email and password
  matchUser = async (
    email: IUser["email"],
    password: IUser["password"],
  ): Promise<IUser | null> => {
    const foundUser = await this.userRepository.findByEmail(email);
    if (foundUser == null) {
      return null;
    }
    if (await compare(password, foundUser.password)) {
      return foundUser;
    } else {
      return null;
    }
  };

  deleteUser = (_id: String) => {
    return this.userRepository.delete(_id);
  };

  updateUser = (_id: String, data: IUser): Promise<IUser | null> => {
    return this.userRepository.update(_id, data);
  };
}
