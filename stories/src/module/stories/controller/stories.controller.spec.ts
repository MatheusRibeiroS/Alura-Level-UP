import { Test, TestingModule } from '@nestjs/testing';
import { StoriesController } from './stories.controller.js';

describe('StoriesController', () => {
  let controller: StoriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoriesController],
    }).compile();

    controller = module.get<StoriesController>(StoriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
