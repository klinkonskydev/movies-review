import * as S from './styles'

import Card from 'components/Card'

export type Movies = {
  id: number
  title: string
  release_date: string
  poster_path: string
  type?: 'author' | 'movie'
}

export type MoviesListProps = {
  items?: Movies[]
}

const MoviesList = ({ items }: MoviesListProps) => (
  <S.Wrapper>
    {items?.length ? (
      items.map((item) => (
        <Card
          {...item}
          subtitle={item.release_date}
          key={`#${item.id} - ${item.title}`}
        />
      ))
    ) : (
      <h2>Empty</h2>
    )}
  </S.Wrapper>
)
export default MoviesList
