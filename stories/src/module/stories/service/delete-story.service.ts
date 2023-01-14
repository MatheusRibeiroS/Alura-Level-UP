import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';
import { FindOneStoryService } from './find-one-story.service.js';

@Injectable()
export class DeleteStoryService {
  constructor(
    @InjectModel(Story)
    @InjectModel(FindOneStoryService)
    private FindOneService: FindOneStoryService,
  ) {}

  async remove(id: string): Promise<void> {
    const story = await this.FindOneService.findOne(id);
    await story.destroy();
  }
}
