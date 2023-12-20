import { TodoStatus } from '@/models/todos.model'

export class UpdateTodoInput {
  id: string
  title?: string
  status?: TodoStatus
}