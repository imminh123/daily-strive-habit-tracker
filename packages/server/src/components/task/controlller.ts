import { OK } from "http-status/lib";
import { TaskServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";

export class TaskController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getTasks = async (req: Req, res: Res, next: NextFn) => {
    try {
      const taskServices = new TaskServices();
      const result = await taskServices.getTasks();

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
}
