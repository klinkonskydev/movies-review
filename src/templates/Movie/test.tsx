import { screen } from '@testing-library/react'
import { render } from 'utils/render'

import Movie, { MovieProps } from '.'

const props: MovieProps = {
  adult: false,
  title: 'The Batman',
  overview:
    'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
  backdrop_path: '/5P8SmMzSNYikXpxil6BYzJ16611.jpg',
  poster_path: '/74xTEgt7R36Fpooo50r9T25onhq.jpg',
  vote_average: 7.8,
  release_date: '2022-02-11',
  runtime: 116,
  genres: [
    {
      id: 1,
      name: 'Action'
    },
    {
      id: 2,
      name: 'Adventure'
    }
  ]
  //genre_ids: [80, 9648, 53],
  //original_language: 'en',
  //original_title: 'The Batman',
  //popularity: 8480.843,
  //release_date: '2022-03-01',
  //video: false,
  //vote_count: 3997
}

describe('<Movie />', () => {
  it('should render correctly', () => {
    render(<Movie {...props} />)
    const imagePath = 'https://image.tmdb.org/t/p/original'

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(screen.getByText(props.overview)).toBeInTheDocument()

    expect(screen.getByText(props.vote_average)).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /foto de capa/i })).toHaveAttribute(
      'src',
      `${imagePath}${props.poster_path}`
    )
  })
})
