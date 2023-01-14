import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoriesController } from './controller/stories.controller.js';
import { FindAllStoriesService } from '../stories/service/find-all-story.service.js';
import { FindOneStoryService } from '../stories/service/find-one-story.service.js';
import { CreateStoryService } from '../stories/service/create-story.service.js';
import { DeleteStoryService } from '../stories/service/delete-story.service.js';
import { UpdateStoryService } from '../stories/service/update-story.service.js';
import { Story } from './model/story.model.js';

@Module({
  imports: [SequelizeModule.forFeature([Story])],
  controllers: [StoriesController],
  providers: [
    FindAllStoriesService,
    FindOneStoryService,
    CreateStoryService,
    DeleteStoryService,
    UpdateStoryService,
  ],
})
export class StoryModule {}
