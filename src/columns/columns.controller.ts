import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

import { ColumnsService } from './columns.service';
import { Column } from './column.entity';

@Crud({
  model: {
    type: Column,
  },
  query: {
    join: {
      tasks: {
        eager: true,
      },
    },
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
@Controller('columns')
export class ColumnsController implements CrudController<Column> {
  constructor(public service: ColumnsService) {}
}
