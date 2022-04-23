import Button from 'components/Button'
import buttonsMock from './mock'

import MoviesList from 'components/MoviesList'
import moviesListMock from 'components/MoviesList/mock'

import NavigateBar from 'components/NavigateBar'
import Container from 'components/Container'
import Header from 'components/Header'

import * as S from './styles'

const HomeTemplate = () => (
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
        <MoviesList items={moviesListMock} />
      </Container>
    </S.Content>

    <NavigateBar pages={5} />
  </S.Wrapper>
)
export default HomeTemplate
