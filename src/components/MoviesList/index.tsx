import * as S from './styles'

import Card, { CardProps } from 'components/Card'

export type MoviesListProps = {
  items?: CardProps[]
}

const MoviesList = ({ items }: MoviesListProps) => (
  <S.Wrapper>
    {items?.length ? (
      items.map((item, index) => (
        <Card {...item} key={`#${index} - ${item.title}`} />
      ))
    ) : (
      <h2>Empty</h2>
    )}
  </S.Wrapper>
)
export default MoviesList
