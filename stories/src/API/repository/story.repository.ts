import { CreateStoryDTO } from "../../module/stories/dtos/create-story.dto.js";
// Story entity is used when all properties for a created story on the database are mandatory
import { StoryEntity } from "../../../../stories/src/entities/story.entity.js";
// same structure as the Story Entity but it has some optional database properties 
import { StoryInterface } from "../../interfaces/interfaces.js";

export default class StoryRepository {
  constructor(private readonly database: any) {}

  async create(storyData: CreateStoryDTO): Promise<StoryEntity> {
    return await this.database.Stories.create(storyData);
  }

  async update(storyId: string, data: Partial<StoryInterface>): Promise<StoryEntity> {
    const updatedStory = await this.database.Stories.update(data, {
      where: { id: storyId },
    });
    return updatedStory;
  }

  async getAll(): Promise<StoryEntity[]> {
    return await this.database.Stories.findAll();
  }

  async findOne(storyId: string): Promise<StoryEntity> {
    return await this.database.Stories.findOne({ where: { id: storyId } });
  }

  async delete(storyId: string): Promise<void> {
    await this.database.Stories.destroy({ where: { id: storyId } });
  }
}
