import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header`
  ${({ theme }) => css`
    position: fixed;
    inset: 0 0 auto 0;

    display: flex;
    justify-content: center;

    padding: ${theme.spacings.regular};
    background: ${theme.colors.primary};

    ${media.greaterThan('medium')`
      padding-left: 11.2rem;
      justify-content: flex-start;
    `}
  `}
`
