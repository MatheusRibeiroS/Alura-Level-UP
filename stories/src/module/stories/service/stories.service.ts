import { HttpExceptionOptions, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';
import { CreateStoryDTO } from '../dtos/create-story.dto.js';
import { UpdateStoryDTO } from '../dtos/update-story.dto.js';
import { AccountVerificationService }  from '../../accounts/service/account-verification.service.js';

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

  async create(story: CreateStoryDTO): Promise<Story | HttpExceptionOptions> {
    // account verification service
    const verification = await AccountVerificationService(story.userId);
    if(verification) {
      return this.storyModel.create({...story});
    }
  }

  async remove(id: string): Promise<void> {
    const story = await this.findOne(id);
    await story.destroy();
  }

  async update(id: string, story: UpdateStoryDTO): Promise<Story> {
    const storyToUpdate = await this.findOne(id);
    return storyToUpdate.update(story);
  }
}
