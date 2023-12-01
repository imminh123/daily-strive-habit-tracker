import { TaskRepository } from "@/db/repositories/task.repository";
import { ITask, TaskModel } from "@/db/models/task.model";

export class TaskServices {
  taskRepository!: TaskRepository;

  constructor() {
    this.taskRepository = new TaskRepository(TaskModel);
  }

  /**
   * @description Get application information.
   * @returns AppInformation
   */

  getTasks = (): Promise<ITask[] | null> => {
    return this.taskRepository.find({});
  };

  createTask = (data: ITask): Promise<ITask | null> => {
    return this.taskRepository.create(data);
  };

  deleteTask = (_id: String) => {
    return this.taskRepository.delete(_id);
  };
  updateTask = (_id: string, data: ITask): Promise<ITask | null> => {
    return this.taskRepository.update(_id, data);
  };
}
