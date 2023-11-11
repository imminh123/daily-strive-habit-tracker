import { OK } from "http-status/lib";
import { LogServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";

export class LogController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getLogs = async (req: Req, res: Res, next: NextFn) => {
    try {
      const logServices = new LogServices();
      const result = await logServices.getLogs();

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static createLog = async (req: Req, res: Res, next: NextFn) => {
    console.log("controller here");
    const body = req.body;
    try {
      const logServices = new LogServices();
      const result = await logServices.createLog(body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  /*  static deleteLog = async (req: Req, res: Res, next: NextFn) => {
    try {
      const logServices = new LogServices();
      const result = await logServices.deleteLog(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };

  static updateLog = async (req: Req, res: Res, next: NextFn) => {
    try {
      const body = req.body;
      const userServices = new LogServices();
      const result = await userServices.updateLog(req.params.id, body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong updating");
      next(error);
    }
  }; */
}
