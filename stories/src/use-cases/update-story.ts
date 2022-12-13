import { UpdateStoryDTO } from "../module/stories/dtos/update-story.dto.js";
import StoryRepository from "../API/repository/story.repository.js";
import { StoryInterface } from "../interfaces/interfaces.js";

export default class UpdateStory {
  constructor(private readonly storyRepository: StoryRepository) {}

  async update(storyId: string, data: Partial<UpdateStoryDTO> ): Promise<StoryInterface> {
    const existingStory = await this.storyRepository.findOne(storyId);
    if(existingStory) {
      return await this.storyRepository.update(storyId, data);
    } else {
      throw new Error("Story not found");
    }
  }
}
