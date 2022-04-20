import { render, screen } from '@testing-library/react'
import Header from '.'

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => "/logo.svg"
}))

describe('<Header />', () => {
  it('should render the title', () => {
    render(<Header />)

    expect(screen.getByRole('link')).toHaveTextContent('/logo.svg')
  })
})
