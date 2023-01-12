import { Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Story } from '../model/story.model.js';
import { CreateStoryDTO } from '../dtos/create-story.dto.js';
import { AccountVerificationService }  from '../validators/account-verification.validate.js';

@Injectable()
export class CreateStoryService {
  constructor(
    @InjectModel(Story)
    private storyModel: typeof Story,
  ) {}

  async create(story: CreateStoryDTO): Promise<Story> {
    const verification = await AccountVerificationService(story.userId);
    if(verification) {
      return this.storyModel.create({...story});
    }
  }
}
