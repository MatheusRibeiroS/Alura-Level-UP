import { Module } from '@nestjs/common';
import { AppController } from '../controller/app.controller.js';
import 'dotenv/config';
import { AppService } from '../service/app.service.js';
import { StoryModule } from './stories/stories.module.js'
import { SequelizeModule } from '@nestjs/sequelize';
import { Story } from '../module/stories/model/story.model.js';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [Story],
    }),
    StoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
