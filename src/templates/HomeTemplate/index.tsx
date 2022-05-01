import { useState } from 'react'
import { api } from 'services/api'
import { useRouter } from 'next/router'

import Button from 'components/Button'
import buttonsMock from './mock'

import MoviesList, { Movies } from 'components/MoviesList'

import NavigateBar from 'components/NavigateBar'
import Container from 'components/Container'
import Header from 'components/Header'

import * as S from './styles'

export type HomeTemplateProps = {
  pages: number
  movies: Movies[]
}

const HomeTemplate = ({ movies, pages }: HomeTemplateProps) => {
  const [moviesList, setMoviesList] = useState<Movies[]>(movies)
  const { push } = useRouter()

  const onClick = async (page: number) => {
    try {
      const { data } = await api.get(`/movie/popular`, {
        params: { page }
      })

      push({
        pathname: '/',
        query: {
          page
        }
      })

      setMoviesList(data.results)
    } catch (e) {
      console.log(e)
    }
  }
  return (
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
          <MoviesList items={moviesList} />
        </Container>
      </S.Content>

      <NavigateBar pages={pages} onClick={onClick} />
    </S.Wrapper>
  )
}

export default HomeTemplate
