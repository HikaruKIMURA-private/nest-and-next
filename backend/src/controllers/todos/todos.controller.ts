import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { TodosService } from '@/services/todos/todos.service'
import { Todo } from '../../entities/todos.entity'
import { InsertResult, UpdateResult, DeleteResult } from 'typeorm'
import { CreateTodoInput } from '@/dto/create-todo.input'
import { UpdateTodoInput } from '@/dto/update-todo.input'

@Controller('todo')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  readAllTodos(): Promise<Todo[]> {
    return this.todosService.readAllTodos()
  }

  @Post()
  async createTodo(@Body() input: CreateTodoInput): Promise<InsertResult> {
    return this.todosService.createTodo(input)
  }

  @Put()
  async updateTodo(@Body() input: UpdateTodoInput): Promise<UpdateResult> {
    return this.todosService.updateTodo(input)
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<DeleteResult> {
    return this.todosService.deleteTodo(id)
  }
}

