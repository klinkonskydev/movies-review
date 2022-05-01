import { rgba } from 'polished'
import styled, { css } from 'styled-components'

export const Svg = styled.svg`
  width: 70px;
  height: 70px;

  position: relative;
`

export const Circle = styled.circle`
  ${({ theme }) => css`
    width: 70px;
    height: 70px;

    fill: ${rgba(theme.colors.white, 0.1)};
    stroke-width: 6;
    stroke: ${theme.colors.green};

    stroke-dasharray: 189;
    stroke-dashoffset: 189;
    stroke-linecap: round;

    transform: translate(5px, 5px);
  `}
`

export const NumberWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Number = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.green};
  `}
`

type WrapperProps = {
  percented: number
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, percented }) => css`
    position: relative;
    width: 70px;
    height: 70px;

    ${Svg} ${Circle}:nth-child(1) {
      stroke-dashoffset: 0;
      stroke: ${rgba(theme.colors.white, 0.2)};
    }

    ${Svg} ${Circle}:nth-child(2) {
      stroke-dashoffset: ${189 - (189 * percented) / 100};
    }
  `}
`
