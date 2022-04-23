import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 124.7rem;

    padding: 0 ${theme.spacings.regular};
    margin-left: auto;
    margin-right: auto;
  `}
`

export default Container
