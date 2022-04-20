import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
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
