import StoryRepository from "../API/repository/story.repository.js";

export class DeleteStory {

  constructor(private readonly storyRepository: StoryRepository) {}

  async delete(storyId: string): Promise<void> {
    await this.storyRepository.delete(storyId);
  }
}