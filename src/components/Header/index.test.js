import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { hrefs } from '../../assets/data/hrefs'
import Header from './'

describe('<Header>', () => {
  test('should render all nav', () => {
    render(<Header />)
    hrefs.map(hrf => {
      expect(screen.getAllByText(hrf)[0]).toBeInTheDocument()
      return expect(screen.getAllByText(hrf)[0]).toHaveAttribute('href', `/${hrf.toLowerCase()}`)
    })
  })

  test('should show logo discordia', () => {
    render(<Header />)
    const logo = screen.getByTitle('Discord clone', { exact: true })
    expect(logo).toBeInTheDocument()
    expect(logo).toHaveAttribute('href', '/')
  })
})