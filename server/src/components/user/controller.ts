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
}
