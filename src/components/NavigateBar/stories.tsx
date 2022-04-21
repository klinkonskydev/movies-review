import { Meta } from '@storybook/react'
import NavigateBar, { NavigateBarProps } from '.'

export default {
  title: 'NavigateBar',
  component: NavigateBar,
  args: {
    initialValue: 1,
    limit: 5
  }
} as Meta

export const Default = (args: NavigateBarProps) => <NavigateBar {...args} />
