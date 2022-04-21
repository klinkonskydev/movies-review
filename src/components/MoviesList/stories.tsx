import { Meta } from '@storybook/react'
import MoviesList, { MoviesListProps } from '.'

import items from './mock'

export default {
  title: 'MoviesList',
  component: MoviesList,
  args: {
    items: items
  }
} as Meta

export const Default = (args: MoviesListProps) => <MoviesList {...args} />

export const Mobile = (args: MoviesListProps) => <MoviesList {...args} />
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2'
  }
}
