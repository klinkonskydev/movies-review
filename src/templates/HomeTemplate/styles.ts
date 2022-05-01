import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as NavigateBarStyles from 'components/NavigateBar/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-top: 6rem;
    padding-bottom: ${theme.spacings.medium};

    ${NavigateBarStyles.Wrapper} {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.big};
    margin-bottom: ${theme.spacings.large};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.hue};
      text-align: center;
    `}
  }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.small};
    text-transform: uppercase;

    ${media.greaterThan('medium')`
      text-align: center;
    `}
  }
  `}
`

export const HeaderWrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.xpurple};
    color: ${theme.colors.white};

    padding: ${theme.spacings.hue} 0;

    ${media.greaterThan('medium')`
      padding: calc((${theme.spacings.hue} - 0.8rem) * 2) 0;
    `}
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacings.xsmal};


    ${media.greaterThan('medium')`
      justify-content: center;
    `}
  `}
`

export const Content = styled.main`
  ${({ theme }) => css`
    padding: ${theme.spacings.large} 0;
  `}
`
