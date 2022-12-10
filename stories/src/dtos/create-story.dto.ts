import { IsString, IsInt, Min, IsNotEmpty, IsOptional } from "class-validator";
import { StoryEntity } from "../entities/story.entity.js";

export class CreateStoryDTO implements Omit<StoryEntity, "id" | "createdAt" | "updatedAt"> {
  
  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  impressions: number;
}
