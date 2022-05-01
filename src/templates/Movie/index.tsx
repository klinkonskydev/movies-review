import MediaMatch from 'components/MediaMatch'
import PercentageCircle from 'components/PercentageCircle'
import * as S from './styles'

type Genres = {
  id: number
  name: string
}

export type MovieProps = {
  adult: boolean
  title: string
  overview: string
  backdrop_path: string
  poster_path: string
  vote_average: number

  release_date: string
  runtime: number
  genres: Genres[]
  //genre_ids: number[]
  //original_language: string
  //original_title: string
  //popularity: number
  //release_date: Date
  //video: boolean
}

const Movie = ({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  runtime,
  genres
}: MovieProps) => (
  <S.Wrapper>
    <S.Header>
      <S.Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        alt="foto de capa"
      />
      <S.DetailsWrapper>
        <S.Heading>{title}</S.Heading>

        <S.Details>
          <S.AboutMovie>
            {release_date.split('-').reverse().join('/')}
          </S.AboutMovie>

          <MediaMatch greaterThan="medium">
            <span>•</span>
          </MediaMatch>
          <S.AboutMovie>{runtime}</S.AboutMovie>
          <MediaMatch greaterThan="medium">
            <span>•</span>
          </MediaMatch>

          <div>
            {genres?.map(genre => (
              <S.GenreList key={genre.id}>
                {genres[0] !== genre ? `, ${genre.name}` : genre.name}
              </S.GenreList>
            ))}
          </div>
        </S.Details>

        <S.Note>
          <PercentageCircle percented={vote_average * 10} />
          <S.AboutMovie>Avaliação dos usuarios</S.AboutMovie>
        </S.Note>

        <S.Synopsis>{overview}</S.Synopsis>
      </S.DetailsWrapper>
    </S.Header>
  </S.Wrapper>
)

export default Movie
