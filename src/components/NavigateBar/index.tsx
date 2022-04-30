import MediaMatch from 'components/MediaMatch'
import { useRouter } from 'next/router'
import * as S from './styles'

export type NavigateBarProps = {
  initialPage?: number
  pages?: number
  onClick?: (page: number) => void
}

const MAX_ITEMS = 3
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const NavigateBar = ({ initialPage = 1, pages, onClick }: NavigateBarProps) => {
  const { query } = useRouter()

  const first = Math.max(Number(query.page || initialPage) - MAX_LEFT, 1)

  const handleClick = (page: number) => {
    !!onClick && onClick(page)
  }

  return (
    <S.Wrapper>
      {(!!pages && (
        <S.ButtonsWrapper>
          <S.ButtonSecondary
            disabled={Number(query.page || initialPage) <= 1}
            onClick={() => handleClick(Number(query.page || initialPage) - 1)}
          >
            Prev
          </S.ButtonSecondary>

          <MediaMatch greaterThan="small">
            <S.Content>
              {Array.from({ length: MAX_ITEMS })
                .map((_, index) => index + first)
                .map((page) =>
                  page <= pages ? (
                    <S.Button
                      key={page}
                      isCurrencyPage={
                        Number(query.page || initialPage) === page
                      }
                      onClick={() => handleClick(page)}
                    >
                      {page}
                    </S.Button>
                  ) : (
                    <S.Button
                      key={page}
                      isCurrencyPage={
                        Number(query.page || initialPage) === page
                      }
                      disabled
                    >
                      ...
                    </S.Button>
                  )
                )}
            </S.Content>
          </MediaMatch>

          <MediaMatch lessThan="small">
            {Number(query.page || initialPage) > 0 && (
              <S.Button type="button" isCurrencyPage={true}>
                {Number(query.page || initialPage)}
              </S.Button>
            )}
          </MediaMatch>

          <S.ButtonSecondary
            disabled={Number(query.page || initialPage) === pages}
            onClick={() => handleClick(Number(query.page || initialPage) + 1)}
          >
            Next
          </S.ButtonSecondary>
        </S.ButtonsWrapper>
      )) || <h2>Empty</h2>}
    </S.Wrapper>
  )
}
export default NavigateBar
