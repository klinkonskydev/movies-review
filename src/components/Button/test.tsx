import { screen, waitFor } from '@testing-library/react'
import { render } from 'utils/render'

import userEvent from '@testing-library/user-event'

import Button from '.'

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button>Ação</Button>)

    const button = screen.getByRole('button', { name: /ação/i })

    expect(button).toBeInTheDocument()

    expect(button).toHaveStyle({
      backgroundColor: '#FFFFFF',
      color: '#323232'
    })
  })

  it('should render the button yellow when is checked', () => {
    render(<Button checked>Ação</Button>)

    const button = screen.getByRole('button', { name: /ação/i })

    expect(button).toHaveStyle({
      background: '#D18000',
      color: '#FFFFFF'
    })

    expect(
      screen.getByRole('img', { name: /unmark item/i })
    ).toBeInTheDocument()
  })

  it('should call the functin and pass new value when button has been clicked', async () => {
    const onClick = jest.fn()
    render(
      <Button checked={true} onClick={onClick}>
        Ação
      </Button>
    )

    const button = screen.getByRole('button', { name: /ação/i })

    userEvent.click(button)

    await waitFor(() => {
      expect(onClick).toHaveBeenCalled()
    })

    expect(onClick).toHaveBeenCalledWith(false)
  })
})
