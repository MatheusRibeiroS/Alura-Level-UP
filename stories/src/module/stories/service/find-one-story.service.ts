import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';

@Injectable()
export class FindOneStoryService {
  constructor(
    @InjectModel(Story)
    private storyModel: typeof Story,
  ) {}

  findOne(id: string): Promise<Story> {
    return this.storyModel.findOne({
      where: {
        id,
      },
    });
  }
}
