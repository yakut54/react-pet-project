import { fireEvent, screen } from '@testing-library/react'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('toggle button collapsed', () => {
    renderWithTranslation(<Sidebar />)
    const btn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    fireEvent.click(btn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
