import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import ButtonLogin from "."

describe('<ButtonLogin>', () => {
  test('should show the button login when initial value of unauthenticated', () => {
    render(<ButtonLogin />)
    const buttonLogin = screen.getByText('Login')
    expect(buttonLogin).toBeInTheDocument()
  })

  test('should show the button Open discordia when if authenticated', () => {
    const { container } = render(<ButtonLogin />)
    const buttonLogin = screen.getByText('Login')
    fireEvent.click(buttonLogin)

    expect(container).toHaveTextContent('Open Discordia')
  })
})