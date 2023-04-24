import { render, screen } from '@testing-library/react'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

describe('Button', () => {
  test('render Button', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('theme clear', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('clear')
    screen.debug()
  })
})
