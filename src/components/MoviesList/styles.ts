import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    place-items: center;

    grid-template-columns: repeat(auto-fill, minmax(17.6rem, 1fr));

    gap: ${theme.spacings.large} ${theme.spacings.regular};

    ${media.greaterThan('medium')`
      gap: ${theme.spacings.large} ${theme.spacings.hue};
    `}
  `}
`
