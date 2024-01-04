import { Delete } from '@nestjs/common';
import { TodosRepository } from '../../repository/todos.repository';
import { TodosService } from './../todos/todos.service';
import { Test, TestingModule } from '@nestjs/testing'
import { Todo } from '../../entities/todos.entity'
import { TodoStatus } from '../../models/todos.model';
import { InsertResult, UpdateResult, DeleteResult, Repository } from 'typeorm'

const mockTodo1: Todo = {
  id: '1',
  title: 'test title',
  status: TodoStatus.done,
  created_at: new Date(),
  updated_at: new Date(),
} as Todo

const mockTodo2: Todo = {
  id: '1',
  title: 'test title',
  status: TodoStatus.done,
  created_at: new Date(),
  updated_at: new Date(),
} as Todo

describe('TodosServiceのテスト', () => {
  let todosService: TodosService
  let todosRepository

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TodosService,
        {
          provide: TodosRepository,
          useFactory: () => ({
            readAllTodos: jest.fn(),
            createTodo: jest.fn(),
            updateTodo: jest.fn(),
            deleteTodo: jest.fn(),
          }),
        },
      ]
    }).compile()

    todosService = module.get<TodosService>(TodosService)
    todosRepository = module.get<TodosRepository>(TodosRepository)
  })


  describe('readAllTodos', () => {
    it('定義されたか', () => {
      expect(todosService).toBeDefined()
      expect(todosRepository).toBeDefined()
    })

    it('データがない場合', async () => {
      const exp = []
      todosRepository.readAllTodos.mockResolvedValue(exp)
      const result = await todosService.readAllTodos()

      expect(result).toEqual(exp)
    })

    it('データが存在する場合正常に取得できるか', async () => {
      const exp = [mockTodo1, mockTodo2]
      todosRepository.readAllTodos.mockResolvedValue(exp)
      const result = await todosService.readAllTodos()

      expect(result).toEqual(exp)
    })
  })

  describe('createTodo', () => {
    it('正常に登録できるか', async () => {
      const insertResult: InsertResult = new InsertResult()

      const input = {
        title: 'Test',
        status: TodoStatus.done,
      }

      todosRepository.createTodo.mockResolvedValue(insertResult)
      const result = await todosService.createTodo(input)

      expect(result).toEqual(insertResult)
    })
  })

  describe('updateTodo', () => {
    const input = {
      id: 'some-id',
      title: 'Updated Title',
      status: TodoStatus.done,
    };

    it('正常に更新できるか', async () => {
      const updateResult: UpdateResult = new UpdateResult()

      todosRepository.updateTodo.mockResolvedValue(updateResult)
      const result = await todosService.updateTodo(input)

      expect(result).toEqual(updateResult)
    })
  })

  describe('deleteTodo', () => {
    const input: string = 'test-id'
    it('正常に更新できるか', async () => {
      const deleteResult: DeleteResult = new DeleteResult()

      todosRepository.deleteTodo.mockResolvedValue(deleteResult)
      const result = await todosService.deleteTodo(input)

      expect(result).toEqual(deleteResult)
    })
  })
})