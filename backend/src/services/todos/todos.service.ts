import { TodosRepository } from './../../repository/todos.repository';
import { Todo } from '../../entities/todos.entity'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { InsertResult, UpdateResult, DeleteResult, Repository } from 'typeorm'
import { CreateTodoInput } from '@/dto/create-todo.input'
import { UpdateTodoInput } from '@/dto/update-todo.input'

@Injectable()
export class TodosService {
  constructor(
    private readonly todosRepository: TodosRepository
  ) {}

  async readAllTodos(): Promise<Todo[]> {
    const selectedTodos = await this.todosRepository.readAllTodos()
    return selectedTodos
  }

  async createTodo(input: CreateTodoInput): Promise<InsertResult> {
    const createdTodos = await this.todosRepository.createTodo(input)
    return createdTodos
  }

  async updateTodo(input: UpdateTodoInput): Promise<UpdateResult> {
    const updatedTodos = await this.todosRepository.updateTodo(input)
    return updatedTodos
  }

  async deleteTodo(todoId: string): Promise<DeleteResult> {
    const deletedTodos = await this.todosRepository.deleteTodo(todoId)
    return deletedTodos
  }
}
