import Card from 'components/Card'
import * as S from './styles'

export type ProductionCompanies = {
  id: number
  logo_path: null | string
  name: string
  origin_country: string
}

export type AuthorsListProps = {
  items?: ProductionCompanies[]
}

const AuthorsList = ({ items }: AuthorsListProps) => (
  <S.Wrapper>
    {items?.length ? (
      items.map((companie) => (
        <Card
          title={companie.name}
          subtitle={companie.origin_country}
          poster_path={companie.logo_path}
          key={companie.id}
          type="author"
        />
      ))
    ) : (
      <h2>Empty</h2>
    )}
  </S.Wrapper>
)
export default AuthorsList
