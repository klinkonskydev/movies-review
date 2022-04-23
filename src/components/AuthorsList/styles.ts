import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.regular};

    padding-bottom: ${theme.spacings.medium};
    scroll-snap-type: x mandatory;
    overflow-x: auto;

    & > div {
      scroll-snap-align: start;
    }
  `}
`
