import { rgba } from 'polished'
import styled, { css, DefaultTheme } from 'styled-components'

export const Wrapper = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.spacings.large};
  `}
`

export const ButtonsWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.spacings.large};
  `}
`

const buttonModifiers = {
  focus: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  `
}

export const Button = styled.button`
  ${({ theme }) => css`
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
  `}
`

export const ButtonSecondary = styled(Button)`
  ${({ theme }) => css`
    padding: 0.2rem ${theme.spacings.regular};
    border-radius: 4px;
  `}
`

type ContentProps = {
  page?: number
}

export const Content = styled.div<ContentProps>`
  ${({ theme, page }) => css`
    display: flex;
    align-items: center;

    gap: ${theme.spacings.large};

    ${Button}:nth-child(${page}) {
      ${!!page && buttonModifiers.focus(theme)}
    }
  `}
`
