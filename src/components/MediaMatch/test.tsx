import { screen } from '@testing-library/react'
import { render } from 'utils/render'

import MediaMatch from '.'

let mobile: Element
let desktop: Element

describe('<MediaMatch />', () => {
  beforeEach(() => {
    render(
      <div>
        <MediaMatch greaterThan="medium">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </div>
    )

    mobile = screen.getByTestId('mobile')
    desktop = screen.getByTestId('desktop')
  })

  it('should be hidden when no media query is passed', () => {
    render(<MediaMatch />)

    expect(mobile.parentElement).toHaveStyleRule('display', 'none')
    expect(desktop.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    render(<MediaMatch />)

    expect(mobile.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })

    expect(desktop.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })
})
