import { rgba } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.spacings.large};
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;

    gap: ${theme.spacings.large};

    ${media.lessThan('small')`
    justify-content: center;
    gap: ${theme.spacings.small};
  `}
  `}
`

const buttonModifiers = {
  focus: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

type ButtonProps = {
  isCurrencyPage?: boolean
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, isCurrencyPage }) => css`
    all: unset;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 3.7rem;
    height: 3.7rem;

    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.regular};
    font-weight: ${theme.font.weight.bold};

    cursor: pointer;
    color: ${theme.colors.primary};

    border-radius: 100%;

    &:disabled {
      color: ${rgba(theme.colors.gray, 0.6)};
      cursor: not-allowed;
    }

    &:focus {
      ${buttonModifiers.focus(theme)}

      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px !important;
    }

    ${!!isCurrencyPage && buttonModifiers.focus(theme)}
  `}
`

export const ButtonSecondary = styled(Button)`
  ${({ theme }) => css`
    padding: 0.2rem ${theme.spacings.regular};
    border-radius: 4px;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.spacings.large};
  `}
`
