/* eslint-disable testing-library/no-render-in-setup */
import { render, screen } from '@testing-library/react'
import Togglable from './Togglable'

describe('Togglable modal', () => {
  beforeEach(() => {
    render(
      <Togglable styles='text-white'>
        <span className='text-base'>testSpanContent</span>
      </Togglable>
    )
  })

  test('renders its children', () => {
    const el = screen.getByText(/testSpanContent/i)
    expect(el).toBeInTheDocument()
  })
})