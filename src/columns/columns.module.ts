import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ColumnsService } from './columns.service';
import { ColumnsController } from './columns.controller';
import { Column } from './column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Column])],
  providers: [ColumnsService],
  controllers: [ColumnsController],
})
export class ColumnsModule {}
