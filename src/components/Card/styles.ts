import styled, { css, DefaultTheme } from 'styled-components'
import { CardProps } from '.'
import { rgba } from 'polished'

type WrapperProps = Pick<CardProps, 'type'>

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 17.6rem;
    display: block;
    height: 22.2rem;

    background-size: cover;
    border-radius: ${theme.spacings.small};
  `}
`

export const Heading = styled.h3``

export const Subtitle = styled.p``

const wrapperModifiers = {
  author: (theme: DefaultTheme) => css`
    max-width: 19.1rem;

    padding: ${theme.spacings.small};

    border-radius: ${theme.spacings.small};
    box-shadow: 0px 4px 4px ${rgba(theme.colors.back, 0.25)};
    background: ${theme.colors.white};

    ${Image} {
      width: 17.5rem;
      height: 22.2rem;
    }

    ${Heading} {
      font-size: ${theme.font.sizes.medium};
      line-height: 3rem;
    }

    ${Subtitle} {
      font-size: ${theme.font.sizes.regular};
      font-weight: ${theme.font.weight.regular};
      line-height: 2.4rem;
    }
  `,

  movie: (theme: DefaultTheme) => css`
    max-width: 17.6rem;
    background: transparent;

    ${Image} {
      width: 17.6rem;
      height: 26.4rem;
    }

    ${Heading} {
      font-size: ${theme.font.sizes.regular};
      line-height: 2.4rem;
    }

    ${Subtitle} {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.small};
      line-height: 2.4rem;
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, type }) => css`
    width: 100%;
    cursor: pointer;

    ${Heading} {
      width: 17.6rem;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    ${!!type && wrapperModifiers[type](theme)}
  `}
`
