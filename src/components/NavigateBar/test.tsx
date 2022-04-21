import { screen, waitFor } from '@testing-library/react'
import { render } from 'utils/render'

import userEvent from '@testing-library/user-event'

import NavigateBar from '.'

describe('<NavigateBar />', () => {
  it('should render correctly', () => {
    render(<NavigateBar initialValue={2} limit={5} />)

    expect(screen.getAllByRole('button')).toHaveLength(7)
  })

  it('should render the empty when no limit has been passed', () => {
    render(<NavigateBar />)

    expect(screen.getByRole('heading', { name: /empty/i })).toBeInTheDocument()
  })

  it('should pass the page clicked', async () => {
    const onClick = jest.fn()
    render(<NavigateBar onClick={onClick} initialValue={2} limit={5} />)

    const button = screen.getByRole('button', { name: /2/ })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(2)
  })

  it('should go to prev page when "previous" button has been clicked ', async () => {
    const onClick = jest.fn()
    const page = 2

    render(<NavigateBar onClick={onClick} initialValue={page} limit={5} />)

    const button = screen.getByRole('button', { name: /prev/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(page - 1)

    expect(screen.getByRole('button', { name: /1/ })).toHaveStyle({
      'background-color': '#5C16C5',
      color: '#FFFFFF'
    })
  })

  it('should go to prev page when "next" button has been clicked ', async () => {
    const onClick = jest.fn()
    const page = 3

    render(<NavigateBar onClick={onClick} initialValue={page} limit={5} />)

    const button = screen.getByRole('button', { name: /next/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(page + 1)

    expect(screen.getByRole('button', { name: /4/ })).toHaveStyle({
      'background-color': '#5C16C5',
      color: '#FFFFFF'
    })
  })
})
