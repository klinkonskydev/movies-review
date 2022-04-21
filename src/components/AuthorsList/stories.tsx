import { Meta } from '@storybook/react'
import AuthorsList, { AuthorsListProps } from '.'

import items from './mock'

export default {
  title: 'AuthorsList',
  component: AuthorsList,
  args: {
    items: [...items, ...items]
  }
} as Meta

export const Default = (args: AuthorsListProps) => <AuthorsList {...args} />

export const Mobile = (args: AuthorsListProps) => <AuthorsList {...args} />

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
