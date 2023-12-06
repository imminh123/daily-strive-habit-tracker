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

  getTasks = (filter = {}): Promise<ITask[] | null> => {
    return this.taskRepository.find(filter);
  };

  getOne = (id: string): Promise<ITask | null> => {
    return this.taskRepository.findById(id);
  };

  createTask = (data: ITask | ITask[]): Promise<ITask | null> => {
    return this.taskRepository.create(data);
  };

  deleteTask = (_id: String) => {
    return this.taskRepository.delete(_id);
  };
  updateTask = (_id: string, data: ITask): Promise<ITask | null> => {
    return this.taskRepository.update(_id, data);
  };
}
