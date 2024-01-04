import { Todo } from '../entities/todos.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { InsertResult, UpdateResult, DeleteResult, Repository } from 'typeorm'
import { CreateTodoInput } from '@/dto/create-todo.input'
import { UpdateTodoInput } from '@/dto/update-todo.input'

@Injectable()
export class TodosRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly repository: Repository<Todo>
    ) {}

  async readAllTodos(): Promise<Todo[]> {
    const selectedTodos = await this.repository.find()
    return selectedTodos
  }

  async createTodo(input: CreateTodoInput): Promise<InsertResult> {
    const createdTodos = await this.repository.insert(input)
    return createdTodos
  }

  async updateTodo(input: UpdateTodoInput): Promise<UpdateResult> {
    const updatedTodos = await this.repository.update(input.id, input)
    return updatedTodos
  }

  async deleteTodo(todoId: string): Promise<DeleteResult> {
    const deletedTodos = await this.repository.delete(todoId)
    return deletedTodos
  }
}