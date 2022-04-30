import Link from 'next/link'
import * as S from './styles'

export type CardProps = {
  id: number
  title: string
  subtitle: string
  poster_path: string
  type?: 'author' | 'movie'
}

const Card = ({
  id,
  poster_path,
  title,
  subtitle,
  type = 'movie'
}: CardProps) => (
  <Link href={`/${id}`}>
    <S.Wrapper type={type}>
      <S.Image
        src={`https://image.tmdb.org/t/p/original${poster_path}`}
        role="img"
        aria-label={type === 'movie' ? `${title} movie` : `${title} author`}
        loading="lazy"
      />

      <S.Heading>{title}</S.Heading>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  </Link>
)
export default Card
