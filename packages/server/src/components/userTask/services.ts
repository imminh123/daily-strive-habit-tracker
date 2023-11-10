import { UserTaskRepository } from "@/db/repositories/userTask.repository";
import { IUserTask, UserTaskModel } from "@/db/models/userTask.model";

export class UserTaskServices {
  userTaskRepository!: UserTaskRepository;

  constructor() {
    this.userTaskRepository = new UserTaskRepository(UserTaskModel);
  }

  /**
   * @description Get application information.
   * @returns AppInformation
   */

  getUserTasks = (): Promise<IUserTask[] | null> => {
    return this.userTaskRepository.find({});
  };

  getUserTask = (id: string): Promise<IUserTask | null> => {
    return this.userTaskRepository.findById(id);
  };

  getUserTasksByUserId = (userId: String): Promise<IUserTask[] | null> => {
    return this.userTaskRepository.find({ user: userId });
  };

  createUserTask = (data: IUserTask): Promise<IUserTask | null> => {
    return this.userTaskRepository.create(data);
  };

  deleteUserTask = (_id: String): Promise<IUserTask | null> => {
    return this.userTaskRepository.delete(_id);
  };
  updateUserTask = (
    _id: string,
    data: IUserTask,
  ): Promise<IUserTask | null> => {
    return this.userTaskRepository.update(_id, data);
  };
}
