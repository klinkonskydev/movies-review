import * as S from './styles'

import Card from 'components/Card'

export type Movies = {
  id: number
  title: string
  release_date: string
  poster_path: string | null
}

export type MoviesListProps = {
  items?: Movies[]
}

const MoviesList = ({ items }: MoviesListProps) => (
  <S.Wrapper>
    {items?.length ? (
      items.map((item) => (
        <Card
          title={item.title}
          href={item.id}
          subtitle={item.release_date}
          key={`#${item.id} - ${item.title}`}
          poster_path={item.poster_path}
          type="movie"
        />
      ))
    ) : (
      <h2>Empty</h2>
    )}
  </S.Wrapper>
)
export default MoviesList
