import { screen } from '@testing-library/react'
import { render } from 'utils/render'

import Card from '.'

const props = {
  src: 'https://localhost/plus.svg',
  title: 'Ryan Reyholds',
  subtitle: 'Wade Wilson / Deadpool'
}

describe('<Card />', () => {
  it('should render correctly', () => {
    render(<Card {...props} />)

    expect(
      screen.getByRole('img', { name: `${props.title} movie` })
    ).toBeInTheDocument()

    expect(screen.getByText(props.subtitle)).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
  })

  it('should render correctly the movie type', () => {
    render(<Card {...props} type="movie" />)

    const wrapper = screen.getByRole('img', {
      name: `${props.title} movie`
    }).parentElement

    expect(wrapper).toHaveStyle({
      background: 'transparent'
    })
  })

  it('should render correctly the author type', () => {
    render(<Card {...props} type="author" />)

    const wrapper = screen.getByRole('img', {
      name: `${props.title} author`
    }).parentElement

    expect(wrapper).toHaveStyle({
      background: '#FFFFFF',
      'box-shadow': '0px 4px 4px rgba(0,0,0,0.25)'
    })
  })
})
