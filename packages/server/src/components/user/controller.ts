import { CREATED, OK } from "http-status/lib";
import { UserServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";

export class UserController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   * @returns {Array<IUser>}
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

  /**
   * @description Register user
   * @param {Object} req "IUser model"
   * @param {Res} res
   * @returns {data: Object} The created user
   */
  static createUser = async (req: Req, res: Res, next: NextFn) => {
    const body = req.body;
    try {
      const userServices = new UserServices();
      if (await userServices.findUser(body.email)) {
        res
          .status(OK)
          .json(apiResponse({ Conflict: "Already existing email" }));
      } else {
        const result = await userServices.createUser(body);
        res.status(CREATED).json(apiResponse(result));
      }
    } catch (error) {
      next(error);
    }
  };

  /**
   * @description Login user (create sesson)
   * @param {email & password} req
   * @param {Res} res
   * @returns {data: Object} Served sessiondata("cookies": "users": "signed":)
   */
  static signInUser = async (req: Req, res: Res, next: NextFn) => {
    try {
      const { email, password } = req.body;
      const userServices = new UserServices();
      const user = await userServices.matchUser(email, password);
      if (user) {
        req.session.user = user;
        req.session.signed = true;
        res.status(OK).json(apiResponse(req.session));
      } else {
        res
          .status(OK)
          .json(apiResponse({ Message: "Wrong email or password" }));
      }
    } catch (error) {
      next(error);
    }
  };
  /**
   * @description Logout user (kill sesson)
   * @param {Req} req nothing
   * @param {Res} res nothing
   */
  static signOutUser = async (req: Req, res: Res, next: NextFn) => {
    try {
      req.session.destroy(function (err) {
        console.log(err);
      });
      res.status(OK).json(apiResponse(req.session));
    } catch (error) {
      next(error);
    }
  };

  static deleteUser = async (req: Req, res: Res, next: NextFn) => {
    try {
      const topicServices = new UserServices();
      const result = await topicServices.deleteUser(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };
}
