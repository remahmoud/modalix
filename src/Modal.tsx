import { CSSProperties, ElementType } from 'react'
import type { ModalProps } from './types'

// parent style
const overlayStyle: CSSProperties = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    display: 'grid',
    placeContent: 'center',
    background: 'rgba(0,0,0,0.8)',
}

const Modal = <T extends ElementType = 'div'>({
    visible = false,
    label = 'Modal',
    as,
    parentStyle,
    onClickOut,
    ...props
}: ModalProps<T>) => {
    // component element type
    const Component = as || 'div'
    // merge parent style
    const style = { ...overlayStyle, ...parentStyle }

    // hide modal if not visible
    if (!visible) return null

    // show modal is visible
    return (
        <div role="dialog" aria-modal="true" aria-label={label} onClick={onClickOut} style={style}>
            <Component {...props} onClick={(e) => e.stopPropagation()}>
                {props.children}
            </Component>
        </div>
    )
}
export default Modal
