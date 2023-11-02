import { OK } from "http-status/lib";
import { UserTaskServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";

export class UserTaskController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getUserTasks = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.getUserTasks();

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static getUserTasksByUserId = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.getUserTasksByUserId(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static createUserTask = async (req: Req, res: Res, next: NextFn) => {
    const body = req.body;
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.createUserTask(body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static deleteUserTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.deleteUserTask(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };

  static updateUserTask = async (req: Req, res: Res, next: NextFn) => {
    try {
      const body = req.body;
      const userTaskServices = new UserTaskServices();
      const result = await userTaskServices.updateUserTask(req.params.id, body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong updating");
      next(error);
    }
  };
}
