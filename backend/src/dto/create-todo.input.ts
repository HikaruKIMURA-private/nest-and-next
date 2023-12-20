import { TodoStatus } from "@/models/todos.model"

export class CreateTodoInput {
  title: string
  status: TodoStatus
}