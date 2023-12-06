import { LogRepository } from "@/db/repositories/log.repository";
import { ILog, LogModel } from "@/db/models/log.model";

export class LogServices {
  logRepository!: LogRepository;

  constructor() {
    this.logRepository = new LogRepository(LogModel);
  }

  /**
   * @description Get application information.
   * @returns AppInformation
   */

  getLogs = (userId: string, taskId: string) => {
    // Calculate the date 7 days ago
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    return this.logRepository.count({
      user: userId,
      createdAt: { $gte: sevenDaysAgo },
      task: taskId,
    });
  };

  createLog = (data: ILog): Promise<ILog | null> => {
    return this.logRepository.create(data);
  };
  /* 
  deleteLog = (_id: String): Promise<ILog | null> => {
    return this.logRepository.delete(_id);
  };
  updateLog = (_id: string, data: ILog): Promise<ILog | null> => {
    return this.logRepository.update(_id, data);
  }; */
}
