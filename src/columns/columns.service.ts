import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Column } from './column.entity';

@Injectable()
export class ColumnsService extends TypeOrmCrudService<Column> {
  constructor(@InjectRepository(Column) repo) {
    super(repo);
  }
}
