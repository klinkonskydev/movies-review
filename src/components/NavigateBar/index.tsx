import { useState } from 'react'
import * as S from './styles'

export type NavigateBarProps = {
  initialValue?: number
  pages?: number
  onClick?: (page: number) => void
}

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const NavigateBar = ({
  initialValue = 1,
  pages,
  onClick
}: NavigateBarProps) => {
  const [current, setCurrent] = useState(initialValue)
  const first = Math.max(current - MAX_LEFT, 1)

  const handlePrevious = () => {
    const newPage = current - 1

    setCurrent(newPage)
    !!onClick && onClick(newPage)
  }

  const handleNext = () => {
    const newPage = current + 1

    setCurrent(newPage)
    !!onClick && onClick(newPage)
  }

  const handleClick = (page: number) => {
    setCurrent(page)
    !!onClick && onClick(page)
  }

  return (
    <S.Wrapper>
      {pages ? (
        <S.ButtonsWrapper>
          <S.ButtonSecondary disabled={current <= 1} onClick={handlePrevious}>
            Prev
          </S.ButtonSecondary>
          <S.Content>
            {Array.from({ length: MAX_ITEMS })
              .map((_, index) => index + first)
              .map((page) =>
                page <= pages ? (
                  <S.Button
                    key={page}
                    isCurrencyPage={current === page}
                    onClick={() => handleClick(page)}
                  >
                    {page}
                  </S.Button>
                ) : (
                  <S.Button
                    key={page}
                    isCurrencyPage={current === page}
                    disabled
                  >
                    {page}
                  </S.Button>
                )
              )}
          </S.Content>
          <S.ButtonSecondary disabled={current === pages} onClick={handleNext}>
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
