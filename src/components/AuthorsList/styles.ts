import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacings.regular};

    padding-bottom: ${theme.spacings.medium};
    overflow-x: scroll;
  `}
`
