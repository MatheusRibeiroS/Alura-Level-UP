export interface UserInterface {
  name: string;
  email: string;
  password: string;
  creation_date: Date;
}

export interface StoryInterface {
  id: string;
  userId: string;
  title: string;
  content: string;
  impressions: number;
  createdAt: Date;
  updatedAt: Date;
}
