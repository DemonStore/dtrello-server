import { Controller, UseGuards } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Crud({
  model: {
    type: Task,
  },
  routes: {
    getManyBase: {
      decorators: [UseGuards(AuthGuard('jwt'))],
    },
  },
})
@Controller('tasks')
export class TasksController {
  constructor(public service: TasksService) {}
}
