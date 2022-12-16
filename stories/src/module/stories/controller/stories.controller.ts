import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StoriesService } from '../service/stories.service.js';
import { CreateStoryDTO } from '../dtos/create-story.dto.js';
import { UpdateStoryDTO } from '../dtos/update-story.dto.js';

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
  create(@Body() story: CreateStoryDTO) {
    return this.storiesService.create(story);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storiesService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() story: UpdateStoryDTO) {
    return this.storiesService.update(id, story);
  }
}
