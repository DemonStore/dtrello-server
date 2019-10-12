import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

import { TasksService } from './tasks.service';
import { Task } from './task.entity';

@Crud({
  model: {
    type: Task,
  },
  params: {
    id: {
      field: 'key',
      type: 'number',
      primary: true,
    },
  },
  routes: {
    getManyBase: {
      decorators: [UseGuards(AuthGuard('jwt'))],
    },
  },
})
@Controller('tasks')
export class TasksController implements CrudController<Task> {
  constructor(public service: TasksService) {}
}
