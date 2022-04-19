import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header test', () => {
  test('renders', () => {
    render(<Header />)
  })
})