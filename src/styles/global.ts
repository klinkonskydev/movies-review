import { createGlobalStyle, css, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<DefaultTheme>`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Roboto'), url('/font/Roboto-Regular.ttf') format('ttf');
    }

    @font-face {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: local('Roboto'), url('/font/Roboto-Bold.ttf') format('ttf');
    }

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
  `}
`
