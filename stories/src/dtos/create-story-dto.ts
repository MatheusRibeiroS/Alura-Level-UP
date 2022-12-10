import { IsString, IsInt, Min, IsNotEmpty } from "class-validator";

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

  @IsNotEmpty()
  @IsInt()
  @Min(0)
  impressions: number;
}
