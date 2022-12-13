import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { StoriesController } from './controller/stories.controller.js';
import { StoriesService } from './service/stories.service.js';
import { Story } from './model/story.model.js';

@Module({
  imports: [
    SequelizeModule.forFeature([Story]),
  ],
  controllers: [StoriesController],
  providers: [StoriesService],
})
export class StoryModule {}
