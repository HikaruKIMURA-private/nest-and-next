import type { NextPage } from 'next'

import { UI_DATA } from '@/constants/uidata'
import Title from '../components/Title'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const HomePage: NextPage = () => {
  // return (
  //   <h3>hello</h3>
  // )
  return (
    <div className='mx-auto max-w-lg mt-10'>
      <div>
        <Title>{UI_DATA.HOME_TITLE}</Title>
        <TodoInput />
      </div>
      <div className='mt-10'>
        <TodoList />
      </div>
    </div>
  )
}

export default HomePage