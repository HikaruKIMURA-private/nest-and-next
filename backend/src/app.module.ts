import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { TodosController } from './controllers/todos/todos.controller'
import { TodosService } from './services/todos/todos.service'
import { TodosModel } from './models/todos.model'
import { TodosModule } from './modules/todos/todos.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'todoappdb',
      username: 'testuser',
      password: 'password',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      synchronize: true,
      logging: true,
    }),
    TodosModule,
  ],
  controllers: [TodosController],
  providers: [TodosService]
})
export class AppModule {}
