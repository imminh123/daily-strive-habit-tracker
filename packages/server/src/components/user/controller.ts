import { OK } from "http-status/lib";
import { UserServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";

export class UserController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getUsers = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userServices = new UserServices();
      const result = await userServices.getUsers();

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static createUser = async (req: Req, res: Res, next: NextFn) => {
    const body = req.body;
    try {
      const userServices = new UserServices();
      const result = await userServices.createUser(body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userServices = new UserServices();
      const result = await userServices.deleteUser(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };

  static updateUser = async (req: Req, res: Res, next: NextFn) => {
    try {
      const body = req.body;
      const userServices = new UserServices();
      const result = await userServices.updateUser(req.params.id, body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong updating");
      next(error);
    }
  };
}
