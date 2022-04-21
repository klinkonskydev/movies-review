import { useState } from 'react'
import * as S from './styles'

export type NavigateBarProps = {
  initialValue?: number
  limit?: number
  onClick?: (page: number) => void
}

const NavigateBar = ({ initialValue, limit, onClick }: NavigateBarProps) => {
  const [page, setPage] = useState(initialValue || 0)
  const array = new Array(limit).fill(0)

  const handlePrevious = () => {
    const newPage = page - 1

    setPage(newPage)
    !!onClick && onClick(newPage)
  }

  const handleNext = () => {
    const newPage = page + 1

    setPage(newPage)
    !!onClick && onClick(newPage)
  }

  const handleClick = (page: number) => {
    setPage(page)
    !!onClick && onClick(page)
  }

  return (
    <S.Wrapper>
      {limit ? (
        <S.ButtonsWrapper>
          <S.ButtonSecondary disabled={page <= 1} onClick={handlePrevious}>
            Prev
          </S.ButtonSecondary>
          <S.Content page={page}>
            {array.map((_, index) => (
              <S.Button key={index} onClick={() => handleClick(index + 1)}>
                {index + 1}
              </S.Button>
            ))}
          </S.Content>
          <S.ButtonSecondary disabled={page === limit} onClick={handleNext}>
            Next
          </S.ButtonSecondary>
        </S.ButtonsWrapper>
      ) : (
        <h2>Empty</h2>
      )}
    </S.Wrapper>
  )
}
export default NavigateBar
