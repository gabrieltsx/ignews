import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
import { Async } from '.'

test('it renders correctly', async () => {
    render(<Async />)

    expect(screen.getByText('Hello World')).toBeInTheDocument() // Sincrono

    // expect(await screen.findByText('Button')).toBeInTheDocument() // Assincrono

    await waitFor(() => { // Assincrono
        return expect(screen.queryByText('Button')).not.toBeInTheDocument()
    })
})