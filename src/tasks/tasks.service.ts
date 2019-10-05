import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Task } from './task.entity';

@Injectable()
export class TasksService extends TypeOrmCrudService<Task> {
  constructor(@InjectRepository(Task) repo) {
    super(repo);
  }
}
