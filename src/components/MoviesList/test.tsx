import { screen } from '@testing-library/react'
import { render } from 'utils/render'

import items from './mock'

import MoviesList from '.'

jest.mock('components/Card', () => ({
  __esModule: true,
  default: ({ title }: { title: string }) => (
    <div data-testid="mock Card">
      <h1>{title}</h1>
    </div>
  )
}))

describe('<MoviesList />', () => {
  it('should render the title', () => {
    render(<MoviesList items={items} />)

    expect(screen.getAllByTestId(/mock Card/i)).toHaveLength(items.length)
    expect(
      screen.getByRole('heading', { name: items[2].title })
    ).toBeInTheDocument()
  })

  it('should return the empty when no items has been passed', () => {
    render(<MoviesList />)

    expect(screen.getByRole('heading', { name: /empty/i })).toBeInTheDocument()
  })
})
