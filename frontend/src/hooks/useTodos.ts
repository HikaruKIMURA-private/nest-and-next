import { useEffect, useState } from 'react'

import { REQUEST_DATA } from '../constants/requestdata'
import { TodoModel } from '../models/todos.model'

export const useTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([])

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

  return {
    todos,
    setTodos,
    readAllTodos,
  }
}