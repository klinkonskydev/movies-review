import { Meta } from '@storybook/react'
import Card from '.'
import { CardProps } from '.'

export default {
  title: 'Card',
  component: Card,
  args: {
    src: 'https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg',
    title: 'Ryan Reyholds',
    subtitle: 'Wade Wilson / Deadpool'
  }
} as Meta

export const Default = (args: CardProps) => <Card {...args} />
