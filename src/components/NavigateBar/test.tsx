import 'match-media-mock'
import { screen, waitFor } from '@testing-library/react'
import { render } from 'utils/render'

import userEvent from '@testing-library/user-event'

import NavigateBar from '.'

const page = 2

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: () => ({
    query: { page }
  })
}))

describe('<NavigateBar />', () => {
  it('should render correctly', () => {
    render(<NavigateBar pages={3} />)

    expect(screen.getByRole('button', { name: /prev/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
  })

  it('should render the empty when no limit has been passed', () => {
    render(<NavigateBar />)

    expect(screen.getByRole('heading', { name: /empty/i })).toBeInTheDocument()
  })

  it('should go to next page', async () => {
    const onClick = jest.fn()

    render(<NavigateBar onClick={onClick} pages={3} />)

    const button = screen.getByRole('button', { name: /next/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(page + 1)
  })

  it('should go to prev page', async () => {
    const onClick = jest.fn()
    render(<NavigateBar onClick={onClick} pages={3} />)

    const button = screen.getByRole('button', { name: /prev/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(page - 1)
  })

  it('should page when clicked in any button', async () => {
    const onClick = jest.fn()

    render(<NavigateBar onClick={onClick} initialPage={page} pages={3} />)

    const button = screen.getByText(/3/i)

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toBeCalled()
    })

    expect(onClick).toBeCalledWith(3)
  })
})
