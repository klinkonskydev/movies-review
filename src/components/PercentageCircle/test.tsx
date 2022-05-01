import { screen } from '@testing-library/react'
import { render } from 'utils/render'

import PercentageCircle from '.'

describe('<PercentageCircle />', () => {
  it('should render the title', () => {
    render(<PercentageCircle percented={50} />)

    expect(screen.getByText(/50%/i)).toBeInTheDocument()
  })
})
