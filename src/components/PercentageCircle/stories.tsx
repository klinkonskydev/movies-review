import { Story, Meta } from '@storybook/react'
import PercentageCircle, { PercentageCircleProps } from '.'

export default {
  title: 'PercentageCircle',
  component: PercentageCircle,
  args: {
    percented: 50
  }
} as Meta<PercentageCircleProps>

export const Default: Story<PercentageCircleProps> = (args) => (
  <PercentageCircle {...args} />
)
