import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'checked'>

const buttonModifiers = {
  isChecked: (theme: DefaultTheme) => css`
    background: ${theme.colors.orange};
    color: ${theme.colors.white};
  `
}

export const Button = styled.button<WrapperProps>`
  ${({ theme, checked }) => css`
    border: 0;
    outline: 0;

    border-radius: 4px;

    padding: ${theme.spacings.small} ${theme.spacings.regular};
    color: ${theme.colors.xblack};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.spacings.small};

    font-size: 1.6rem;
    font-height: 700;

    background: ${theme.colors.white};
    ${!!checked && buttonModifiers.isChecked(theme)}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: ${theme.spacings.regular};
    height: ${theme.spacings.regular};
  `}
`
