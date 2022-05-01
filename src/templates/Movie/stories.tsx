import { Story, Meta } from '@storybook/react'
import Movie, { MovieProps } from '.'

export default {
  title: 'Movie',
  component: Movie
} as Meta<MovieProps>

export const Default: Story<MovieProps> = (args) => <Movie {...args} />
