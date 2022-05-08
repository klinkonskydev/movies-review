import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  margin-top: 5.8rem;
`

export const Header = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    padding: ${theme.spacings.large} ${theme.spacings.regular} 7.1rem;

    background: ${theme.colors.xpurple};

    ${media.greaterThan('medium')`
      max-height: 55rem;
      padding: ${theme.spacings.large} 0 6.1rem 11.2rem;
      flex-direction: row;
      align-content: end;
    `}
  `}
`

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    max-width: 18.6rem;
    height: 27.9rem;
    object-fit: cover;

    display: block;

    margin: 0 auto calc(${theme.spacings.large} + 1rem);

    border-radius: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      max-width: 38.3rem;
      height: 57.4rem;
      margin: 0 ${theme.spacings.large} 0 0;
    `}
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: flex;
      align-items: center;
      gap: ${theme.spacings.small};
      color: ${theme.colors.white};
    `}
  `}
`

export const DetailsWrapper = styled.div``

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: calc(${theme.font.sizes.regular} + ${theme.font.sizes.regular});
    color: ${theme.colors.white};
    margin-bottom: 0.3rem;
  `}
`

export const AboutMovie = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.white};
  `}
`

export const GenreList = styled.p`
  ${({ theme }) => css`
    display: inline;
    font-weight: ${theme.font.weight.regular};
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.white};
  `}
`

export const MovieDescription = styled.p`
  ${({ theme }) => css`
    font-weight: ${theme.font.weight.regular};
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.white};
  `}
`

export const Synopsis = styled.p`
  ${({ theme }) => css`
    overflow: hidden;
    -webkit-line-clamp: 10;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    font-weight: ${theme.font.weight.regular};
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.xwhite};

    ${media.greaterThan('medium')`
      width: 100%;
      max-width: 75ch;
    `}
  `}
`

export const Note = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} ${theme.spacings.medium}
      ${theme.spacings.medium} 0;

    display: flex;
    align-items: center;
    gap: ${theme.spacings.medium};
  `}
`

export const NoteAverage = styled.div`
  ${({ theme }) => css`
    position: relative;

    width: 6rem;
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${theme.colors.green};

    border: 5px solid ${theme.colors.green};
    border-radius: 6rem;

    background: ${rgba(theme.colors.white, 0.1)};
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.weight.regular};
    margin-bottom: ${theme.spacings.medium};
    color: ${theme.colors.black};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.big};
    `}
  `}
`

export const CompanieWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};
    padding-top: ${theme.spacings.medium};
    padding-left: ${theme.spacings.xsmal};

    ${media.greaterThan('medium')`
      margin-top: calc(${theme.spacings.hue} + ${theme.spacings.medium});
      padding-left: ${theme.spacings.hue};
    `}
  `}
`
