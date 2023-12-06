import { CREATED, OK } from "http-status/lib";
import { UserServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";
import { TaskServices } from "../task/services";
import { UserTaskServices } from "../userTask/services";
import { ICreateUserTask } from "@/db/models/userTask.model";

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

  static getUser = async (req: Req, res: Res, next: NextFn) => {
    try {
      const userServices = new UserServices();
      const result = await userServices.getUser(req.params.id);

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

        if (result) {
          const taskServices = new UserTaskServices();

          // create sample tasks
          const sampleTasks: ICreateUserTask[] = [
            {
              name: "Browse the task list",
              description:
                "Get to see what tasks do we offer to improve yourself.",
              notificationToggle: false,
              completed: false,
              streak: 0,
              user: result._id,
            },
            {
              name: "Choose one of the task from our task list",
              description: "Choose one task that suits your target.",
              notificationToggle: false,
              completed: false,
              streak: 0,
              user: result._id,
            },
            {
              name: "Create your own custom task",
              description:
                "Can't find the task you want in the list? Worry not, create one of your own.",
              notificationToggle: false,
              completed: false,
              streak: 0,
              user: result._id,
            },
            {
              name: "Check your inbox for notification",
              description:
                "We will send you notification for each task via your email inbox.",
              notificationToggle: false,
              completed: false,
              streak: 0,
              user: result._id,
            },
          ];

          await taskServices.createUserTask(sampleTasks);
        }

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
