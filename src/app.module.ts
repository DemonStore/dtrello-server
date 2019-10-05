import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { TasksModule } from './tasks/tasks.module';
import { ColumnsModule } from './columns/columns.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/main.sql',
      entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    }),
    TasksModule,
    ColumnsModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
