import Button from 'components/Button'
import buttonsMock from './mock'

import MoviesList from 'components/MoviesList'

import NavigateBar from 'components/NavigateBar'
import Container from 'components/Container'
import Header from 'components/Header'

import * as S from './styles'
import { CardProps } from 'components/Card'

export type HomeTemplateProps = {
  pages: number
  movies: CardProps[]
}

const HomeTemplate = ({ movies, pages }: HomeTemplateProps) => (
  <S.Wrapper>
    <Header />
    <S.HeaderWrapper>
      <Container>
        <S.Heading>
          Milhões de filmes, séries e pessoas para descobrir. Explore já.
        </S.Heading>

        <S.Subtitle>Filtre por:</S.Subtitle>
        <S.ButtonsWrapper>
          {buttonsMock.map((label, index) => (
            <Button key={`#${index}-${label}`} type="button">
              {label}
            </Button>
          ))}
        </S.ButtonsWrapper>
      </Container>
    </S.HeaderWrapper>

    <S.Content>
      <Container>
        <MoviesList items={movies} />
      </Container>
    </S.Content>

    <NavigateBar pages={pages} />
  </S.Wrapper>
)
export default HomeTemplate
