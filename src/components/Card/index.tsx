import Link from 'next/link'
import * as S from './styles'

export type CardProps = {
  title: string
  subtitle: string
  poster_path: string | null
  href?: string | number
  type?: 'author' | 'movie'
}

const Card = ({
  href,
  poster_path,
  title,
  subtitle,
  type = 'movie'
}: CardProps) =>
  href ? (
    <Link href={`/${href}`}>
      <S.Wrapper type={type}>
        <S.Image
          role="img"
          aria-label={type === 'movie' ? `${title} movie` : `${title} author`}
          loading="lazy"
          {...(poster_path
            ? { src: `https://image.tmdb.org/t/p/original${poster_path}` }
            : { src: '/alien.svg' })}
        />

        <S.Heading>{title}</S.Heading>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.Wrapper>
    </Link>
  ) : (
    <S.Wrapper type={type}>
      <S.Image
        role="img"
        aria-label={type === 'movie' ? `${title} movie` : `${title} author`}
        loading="lazy"
        {...(poster_path
          ? { src: `https://image.tmdb.org/t/p/original${poster_path}` }
          : { src: '/alien.svg' })}
      />

      <S.Heading>{title}</S.Heading>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  )
export default Card
