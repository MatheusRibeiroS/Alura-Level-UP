import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';
import { UpdateStoryDTO } from '../dtos/update-story.dto.js';
import { FindOneStoryService } from './find-one-story.service.js';

@Injectable()
export class UpdateStoryService {
  constructor(
    @InjectModel(Story)
    @InjectModel(FindOneStoryService)
    private FindOneService: FindOneStoryService,
  ) {}

  async update(id: string, story: UpdateStoryDTO): Promise<Story> {
    const storyToUpdate = await this.FindOneService.findOne(id);
    return storyToUpdate.update(story);
  }
}
