import { screen } from '@testing-library/react'
import { render } from 'utils/render'
import Header from '.'

jest.mock('next/image', () => ({
    __esModule: true,
    default: () => '/logo.svg'
}))

describe('<Header />', () => {
    it('should render the title', () => {
        render(<Header />)

        expect(screen.getByRole('link')).toHaveTextContent('/logo.svg')

        expect(screen.getByRole('link').parentElement).toHaveStyle({
            'justify-content': 'center'
        })

        expect(screen.getByRole('link').parentElement).toHaveStyleRule(
            'justify-content',
            'flex-start',
            {
                media: '(min-width: 768px)'
            }
        )
    })
})
