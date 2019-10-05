import {
  Column as ColumnDecorator,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Column } from '../columns/column.entity';

@Entity({
  name: 'tasks',
})
export class Task {
  @PrimaryGeneratedColumn()
  key: number;

  @ManyToOne(type => Column, column => column.tasks)
  @JoinColumn({ name: 'column_id' })
  column: Column;

  @ColumnDecorator('text')
  title: string;

  @ColumnDecorator('text')
  description: string;

  @ColumnDecorator({
    name: 'created_at',
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @ColumnDecorator('int')
  sequence: number;
}
