export interface StoryInterface {
  id?: string;
  userId: string;
  title: string;
  content: string;
  impressions: number;
  createdAt?: Date;
  updatedAt?: Date;
}