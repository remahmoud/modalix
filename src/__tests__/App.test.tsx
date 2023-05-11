import App from '../example/App.example'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

describe('modal component check', () => {
    beforeEach(() => {
        render(<App />)
        const openBtn = screen.getByTestId('open')
        // open modal
        userEvent.click(openBtn)
    })

    it('modal should be opened', async () => {
        const modal = await screen.findByTestId('modal')
        expect(modal).toBeInTheDocument()
    })
    it('modal should be form', async () => {
        const modal = await screen.findByTestId('modal')
        expect(modal.nodeName.toLowerCase()).toBe('form')
    })
    it('modal container should be has aria label', async () => {
        const element = await screen.findByLabelText(/ModalForm/i)
        expect(element).toBeInTheDocument()
    })

    it('modal should be closed', async () => {
        const closeBtn = await screen.findByTestId('close')

        // close modal
        userEvent.click(closeBtn)

        await waitFor(() => {
            expect(screen.queryByTestId('modal')).toBeNull()
        })
    })
})
