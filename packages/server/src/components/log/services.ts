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

  getLogs = (): Promise<ILog[] | null> => {
    return this.logRepository.find({});
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
