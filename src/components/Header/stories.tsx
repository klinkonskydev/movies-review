import { Meta } from '@storybook/react'
import Header from '.'

export default {
    title: 'Header',
    component: Header,
    parameters: {
        backgrounds: {
            default: 'dark'
        }
    }
} as Meta

export const Default = () => <Header />

export const Mobile = () => <Header />

Mobile.parameters = {
    viewport: {
        defaultViewport: 'mobile1'
    },
}
