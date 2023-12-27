import { useEffect, useState } from 'react'

import { REQUEST_DATA } from '../constants/requestdata'
import { TodoModel, TodoStatus } from '../models/todos.model'

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([])
  const [todo, setTodo] = useState<string>('')
  const [todoId, setTodoId] = useState<string>('')

  useEffect(() => {
    // 画面ロード時に全件取得する
    readAllTodos()
  }, [])

  const readAllTodos = async () => {
    // 全件取得
    const res = await fetch(REQUEST_DATA.TODO_GET)
    const json = await res.json()
    setTodos(json)
  }

  const createTodo = async () => {
    if (!todo) {
      return
    }

    if (todoId === '') {
      // 追加
      await fetch(REQUEST_DATA.TODO_POST, {
        method: 'POST',
        body: JSON.stringify({
          title: todo,
          status: TodoStatus.waiting,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
    } else {
      // 更新
      await fetch(REQUEST_DATA.TODO_PUT, {
        method: 'PUT',
        body: JSON.stringify({
          id: todoId,
          title: todo,
        }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
    }
    readAllTodos()
    setTodo('')
    setTodoId('')
  }

  const updateStatusTodo = async (updateTodo: TodoModel) => {
    const todoStatus = updateTodo.status == TodoStatus.waiting ? TodoStatus.done : TodoStatus.waiting
    await fetch(REQUEST_DATA.TODO_PUT, {
      method: 'PUT',
      body: JSON.stringify({
        id: updateTodo.id,
        status: todoStatus,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    readAllTodos()
  }

  const deleteTodo = async (deleteTodo: TodoModel) => {
    if (!deleteTodo) {
      return
    }
    await fetch(REQUEST_DATA.TODO_DELETE + deleteTodo.id, {
      method: 'DELETE',
    })
    readAllTodos()
  }

  const updateTitleTodo = (updateTodo: TodoModel) => {
    setTodo(updateTodo.title)
    setTodoId(updateTodo.id)
  }

  return {
    todo,
    setTodo,
    todos,
    setTodos,
    todoId,
    setTodoId,
    readAllTodos,
    createTodo,
    updateStatusTodo,
    updateTitleTodo,
    deleteTodo,
  }
}