import { Story, Meta } from '@storybook/react'
import AuthorsList, { AuthorsListProps } from '.'

import items from './mock'

export default {
  title: 'AuthorsList',
  component: AuthorsList,
  args: {
    items: [...items, ...items]
  }
} as Meta<AuthorsListProps>

export const Default: Story<AuthorsListProps> = (args) => (
  <AuthorsList {...args} />
)

export const Mobile: Story<AuthorsListProps> = (args) => (
  <AuthorsList {...args} />
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
