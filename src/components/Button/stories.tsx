import { Meta } from '@storybook/react'
import Button from '.'
import { ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button,
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
} as Meta

export const Default = (args: ButtonProps) => <Button {...args} />

Default.args = {
  children: 'Ação'
}
