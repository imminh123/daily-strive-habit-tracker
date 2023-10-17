import { TopicRepository } from "@/db/repositories/topic.repository";
import { ITopic, TopicModel } from "@/db/models/topic.model";

export class TopicServices {
  topicRepository!: TopicRepository;

  constructor() {
    this.topicRepository = new TopicRepository(TopicModel);
  }

  /**
   * @description Get application information.
   * @returns AppInformation
   */

  getTopics = (): Promise<ITopic[] | null> => {
    return this.topicRepository.find({});
  };

  createTopic = (data: ITopic): Promise<ITopic | null> => {
    return this.topicRepository.create(data);
  };

  deleteTopic = (_id: String): Promise<ITopic | null> => {
    return this.topicRepository.delete(_id);
  };
}
