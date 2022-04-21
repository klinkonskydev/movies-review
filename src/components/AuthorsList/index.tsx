import Card, { CardProps } from 'components/Card'
import * as S from './styles'

export type AuthorsListProps = {
  items?: CardProps[]
}

const AuthorsList = ({ items }: AuthorsListProps) => (
  <S.Wrapper>
    {items?.length ? (
      items.map((author, index) => (
        <Card {...author} key={`#${index}-${author.title}`} />
      ))
    ) : (
      <h2>Empty</h2>
    )}
  </S.Wrapper>
)
export default AuthorsList
