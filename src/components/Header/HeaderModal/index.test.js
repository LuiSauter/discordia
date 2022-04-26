/* eslint-disable testing-library/no-node-access */
import { screen, render, fireEvent } from '@testing-library/react'
import HeaderModal from '.'

describe('<HeaderModal>', () => {
  test('should disable the scroll bar of app when the modal is displayed.', () => {
    render(<HeaderModal visible={true} />)
    const body = document.body.style.overflowY
    expect(body).toEqual('hidden')
  })

  test('should active scrollY in the body element when the modal is disabled', () => {
    const mockHandler = jest.fn()
    render(<HeaderModal visible={false} handleVisible={mockHandler} />)
    const button = screen.getByTitle('Exit')
    fireEvent.click(button.parentNode.parentNode)
    const body = document.body.style.overflowY


    expect(mockHandler).toHaveBeenCalledTimes(1)
    expect(body).toEqual('scroll')
  })
})
