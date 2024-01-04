import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from '../../entities/todos.entity'
import { TodosController } from '@/controllers/todos/todos.controller'
import { TodosService } from '@/services/todos/todos.service'
import { TodosRepository } from '@/repository/todos.repository'

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodosController],
  providers: [TodosService, TodosRepository],
})
export class TodosModule {}
