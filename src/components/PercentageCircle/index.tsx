import * as S from './styles'

export type PercentageCircleProps = {
  percented: number
}

const PercentageCircle = ({ percented }: PercentageCircleProps) => (
  <S.Wrapper percented={percented}>
    <S.Svg>
      <S.Circle cx="30" cy="30" r="30"></S.Circle>
      <S.Circle cx="30" cy="30" r="30"></S.Circle>
    </S.Svg>
    <S.NumberWrapper>
      <S.Number>{percented}%</S.Number>
    </S.NumberWrapper>
  </S.Wrapper>
)
export default PercentageCircle
