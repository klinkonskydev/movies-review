import 'match-media-mock'
import { screen, waitFor } from '@testing-library/react'
import { render } from 'utils/render'

import userEvent from '@testing-library/user-event'

import NavigateBar from '.'

describe('<NavigateBar />', () => {
  it('should render correctly', () => {
    render(<NavigateBar initialPage={0} pages={2} />)

    expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('should render the empty when no limit has been passed', () => {
    render(<NavigateBar />)

    expect(screen.getByRole('heading', { name: /empty/i })).toBeInTheDocument()
  })

  it('should pass the page clicked', async () => {
    const onClick = jest.fn()
    const page = 0

    render(<NavigateBar onClick={onClick} initialPage={page} pages={5} />)

    const button = screen.getByRole('button', { name: /next/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(page + 1)
  })

  it('should go to prev page when "Prev" button has been clicked ', async () => {
    const onClick = jest.fn()
    const page = 3

    render(<NavigateBar onClick={onClick} initialPage={page} pages={5} />)

    const button = screen.getByRole('button', { name: /prev/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(page - 1)
  })

  it('should go to prev page when "Prev" button has been clicked ', async () => {
    const onClick = jest.fn()
    const page = 0

    render(<NavigateBar onClick={onClick} initialPage={page} pages={2} />)

    const button = screen.getByText(2)

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(2)
  })
})
