import type { AppProps } from 'next/app'
import Head from 'next/head'

import NextNProgress from 'nextjs-progressbar'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import theme from 'styles/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Movies Review</title>
        <meta name="theme-color" content="#5C16C5" />
      </Head>

      <NextNProgress
        color={theme.colors.green}
        height={5}
      />

      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
