import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateStoryService } from '../service/create-story.service.js';
import { FindAllStoriesService } from '../service/find-all-story.service.js';
import { FindOneStoryService } from '../service/find-one-story.service.js';
import { DeleteStoryService } from '../service/delete-story.service.js';
import { UpdateStoryService } from '../service/update-story.service.js';
import { CreateStoryDTO } from '../dtos/create-story.dto.js';
import { UpdateStoryDTO } from '../dtos/update-story.dto.js';

@Controller('stories')
export class StoriesController {
  constructor(
    private readonly createStoryService: CreateStoryService,
    private readonly findAllStoriesService: FindAllStoriesService,
    private readonly findOneStoryService: FindOneStoryService,
    private readonly deleteStoryService: DeleteStoryService,
    private readonly updateStoryService: UpdateStoryService,
  ) {}

  @Get()
  findAll() {
    return this.findAllStoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
      return await this.findOneStoryService.findOne(id);
  }

  @Post()
  async create(@Body() story: CreateStoryDTO) {
    return await this.createStoryService.create(story);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.deleteStoryService.remove(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() story: UpdateStoryDTO) {
    return await this.updateStoryService.update(id, story);
  }
}
