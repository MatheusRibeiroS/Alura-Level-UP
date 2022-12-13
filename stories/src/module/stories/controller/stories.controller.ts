import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { StoriesService } from '../service/stories.service.js';

@Controller('stories')
export class StoriesController {
  constructor(private readonly storiesService: StoriesService) {}

  @Get()
  findAll() {
    return this.storiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storiesService.findOne(id);
  }

  @Post()
  create(@Body() story: any) {
    return this.storiesService.create(story);
  }

  @Get(':id')
  remove(@Param('id') id: string) {
    return this.storiesService.remove(id);
  }
}
