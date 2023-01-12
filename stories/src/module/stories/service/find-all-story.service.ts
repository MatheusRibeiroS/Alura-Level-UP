import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';

@Injectable()
export class FindAllStoriesService {
  constructor(
    @InjectModel(Story)
    private storyModel: typeof Story,
  ) {}

  async findAll(): Promise<Story[]> {
    return this.storyModel.findAll();
  }
}
