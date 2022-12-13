import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';

@Injectable()
export class StoriesService {
  constructor(
    @InjectModel(Story)
    private storyModel: typeof Story,
  ) {}

  async findAll(): Promise<Story[]> {
    return this.storyModel.findAll();
  }

  findOne(id: string): Promise<Story> {
    return this.storyModel.findOne({
      where: {
        id,
      },
    });
  }

  create(story: any): Promise<Story> {
    return this.storyModel.create(story);
  }

  async remove(id: string): Promise<void> {
    const story = await this.findOne(id);
    await story.destroy();
  }
}
