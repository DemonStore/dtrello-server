import {
  Column as ColumnDecorator,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Task } from '../tasks/task.entity';

@Entity({
  name: 'columns',
})
export class Column {
  @PrimaryGeneratedColumn()
  key: number;

  @ColumnDecorator('text')
  title: string;

  @ColumnDecorator('int')
  sequence: number;

  @OneToMany(type => Task, task => task.column)
  tasks: Task[];
}
