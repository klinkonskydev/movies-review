import { render } from 'utils/render'

import Container from '.'

describe('<Container />', () => {
  it('should render the title', () => {
    const { container } = render(<Container />)

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 124.7rem;
        padding: 0 1.6rem;
        margin-left: auto;
        margin-right: auto;
      }

      <div
        class="c0"
      />
    `)
  })
})
