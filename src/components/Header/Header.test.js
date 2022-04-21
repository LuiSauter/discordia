import '@testing-library/jest-dom/extend-expect'
import { fireEvent, prettyDOM, render, screen } from '@testing-library/react'
import { hrefs } from '../../assets/data/hrefs'
import Togglable from '../Togglable/Togglable'
import Header from './Header'

describe('Header test', () => {
  test('renders content', () => {
    render(<Header />)
    hrefs.map((a) => {
      const links = screen.getAllByText(a)
      return expect(links).toHaveLength(2)
    })
    const button = screen.getByText(/Login/i)
    expect(button).toBeInTheDocument()
  })

  test('clicking the button calls event handler once', () => {
    const mockHandler = jest.fn()

    render(<Header signIn={mockHandler} />)

    const button = screen.getByText(/Login/i)
    expect(button).toBeInTheDocument()
    fireEvent.click(button)

    expect(mockHandler.mock.calls).toHaveLength(1)
    // expect(mockHandler).toHaveBeenCalledTimes(1)
  })

  test('after clicking its must be shown a to menu modal', () => {
    render(
      <Togglable stringStyle='text-white' >
        <span className='text-base'>testSpanContent</span>
      </Togglable >
    )
    const { parentNode } = screen.getByText(/testSpanContent/i)
    console.log(prettyDOM(parentNode))
    fireEvent.click(parentNode)
  })
})