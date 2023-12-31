import React from 'react'
import { render, screen } from '@testing-library/react'
import Title from '../../components/Title'
import { UI_DATA } from '../../constants/uidata'

describe('Titleコンポーネントのテスト', () => {
  test('基本的なレンダリング', () => {
    render(<Title />)
    const divElement = screen.getByRole('heading')
    expect(divElement).toBeInTheDocument()
  })

  test('意図したタイトルが表示されるか', () => {
    render(<Title>{UI_DATA.HOME_TITLE}</Title>)
    expect(screen.getByText(UI_DATA.HOME_TITLE)).toBeInTheDocument()
  })
})
