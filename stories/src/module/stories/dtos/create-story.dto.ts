import { IsString, IsInt, Min, IsNotEmpty, IsOptional } from "class-validator";
import { Story } from "../model/story.model.js"

export class CreateStoryDTO {
  
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
