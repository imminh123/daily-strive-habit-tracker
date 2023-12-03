import { OK } from "http-status/lib";
import { TaskServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";
import {Types} from 'mongoose'

export class TaskController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getTasks = async (req: Req, res: Res, next: NextFn) => {
    try {
      const taskServices = new TaskServices();
      const result = await taskServices.getTasks({ topic: new Types.ObjectId(req.query.topicId as string) });

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static getTasksDetail = async (req: Req, res: Res, next: NextFn) => {
    try {
      const taskServices = new TaskServices();
      const result = await taskServices.getOne(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static createTask = async (req: Req, res: Res, next: NextFn) => {
    const body = req.body;
    try {
      const taskServices = new TaskServices();
      const result = await taskServices.createTask(body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static deleteTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const taskServices = new TaskServices();
      const result = await taskServices.deleteTask(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };

  static updateTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const body = req.body;
      const taskServices = new TaskServices();
      const result = await taskServices.updateTask(req.params.id, body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong updating");
      next(error);
    }
  };
}
