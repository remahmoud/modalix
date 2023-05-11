import React, { useState } from 'react'
import Modal from '../Modal'

export default function App() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <button data-testid="open" onClick={() => setOpen(true)}>
                open
            </button>
            <Modal visible={open} data-testid="modal" as="form" label="ModalForm">
                <h2 data-testid="msg">Hello</h2>
                <button type="button" data-testid="close" onClick={() => setOpen(false)}>
                    close
                </button>
            </Modal>
        </div>
    )
}
