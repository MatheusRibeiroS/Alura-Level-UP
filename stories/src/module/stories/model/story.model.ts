import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Story extends Model {

  //@ForeignKey(() => User)
  @Column
  userId: string;

  @Column
  title: string;

  @Column
  content: string;

  @Column
  impressions: number;
}