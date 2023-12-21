const TodoList = () => {
  return (
    <ul className='divide-y divide-gray-200 border-t border-b border-gray-200'>
      <li className='flex items-center justify-between space-x-3 py-4'>
        <input
          type='checkbox'
          className='h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-600 cursor-pointer'
        />
        <div className='flex min-w-0 flex-1 items-center space-x-3'>
          <div className='min-w-0 flex-1'>
            <p className='truncate text-sm font-medium text-gray-900'>タスク1</p>
          </div>
        </div>
        <div className='flex space-x-2'>
          <button
            type='button'
            className='flex items-center rounded bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800 hover:bg-gray-200'
          >
            編集
          </button>
          <button
            type='button'
            className='flex items-center rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800 hover:bg-red-200'
          >
            削除
          </button>
        </div>
      </li>
    </ul>
  )
}

export default TodoList