import { OK } from "http-status/lib";
import { TopicServices } from "./services";
import { apiResponse } from "@/helpers/apiResponse";

export class TopicController {
  /**
   * @description Gets the API information.
   * @param {Req} req
   * @param {Res} res
   */
  static getTopics = async (req: Req, res: Res, next: NextFn) => {
    try {
      const topicServices = new TopicServices();
      const result = await topicServices.getTopics();

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static createTopic = async (req: Req, res: Res, next: NextFn) => {
    const body = req.body;
    try {
      const topicServices = new TopicServices();
      const result = await topicServices.createTopic(body);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      next(error);
    }
  };

  static deleteTopic = async (req: Req, res: Res, next: NextFn) => {
    try {
      const topicServices = new TopicServices();
      const result = await topicServices.deleteTopic(req.params.id);

      res.status(OK).json(apiResponse(result));
    } catch (error) {
      console.log("something went wrong deleting");
      next(error);
    }
  };
}
