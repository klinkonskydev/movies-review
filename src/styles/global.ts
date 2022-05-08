import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    body * {
      margin: 0;
      padding: 0;

      box-sizing: border-box;

      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: ${theme.font.sizes.regular};
      font-family: ${theme.font.family};
      font-weight: ${theme.font.weight.bold};

      &::after,
      &::before {
        box-sizing: inherit;
      }
    }

    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    img {
      filter: contrast(1.1) brightness(1.1) saturate(1.1);
    }
  `}
`
