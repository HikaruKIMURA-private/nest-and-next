import type { NextPage } from 'next'

import { UI_DATA } from '@/constants/uidata'
import Title from '../components/Title'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

import { useTodos } from '../hooks/useTodos'

const HomePage: NextPage = () => {
  const { todos, setTodos } = useTodos()

  return (
    <div className='mx-auto max-w-lg mt-10'>
      <div>
        <Title>{UI_DATA.HOME_TITLE}</Title>
        <TodoInput />
      </div>
      <div className='mt-10'>
        <TodoList todos={todos} />
      </div>
    </div>
  )
}

export default HomePage
