import { Story, Meta } from '@storybook/react'
import NavigateBar, { NavigateBarProps } from '.'

export default {
  title: 'NavigateBar',
  component: NavigateBar,
  args: {
    initialValue: 1,
    pages: 9
  }
} as Meta

export const Default: Story = (args: NavigateBarProps) => (
  <NavigateBar {...args} />
)

export const Mobile: Story = (args: NavigateBarProps) => (
  <NavigateBar {...args} />
)

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
