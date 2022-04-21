import * as S from './styles'

export type CardProps = {
  src: string
  title: string
  subtitle: string
  type?: 'author' | 'movie'
}

const Card = ({ src, title, subtitle, type = 'movie' }: CardProps) => (
  <S.Wrapper type={type}>
    <S.Image
      src={src}
      role="img"
      aria-label={type === 'movie' ? `${title} movie` : `${title} author`}
    ></S.Image>

    <S.Heading>{title}</S.Heading>
    <S.Subtitle>{subtitle}</S.Subtitle>
  </S.Wrapper>
)
export default Card
