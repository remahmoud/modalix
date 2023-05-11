import { CSSProperties, ComponentPropsWithoutRef, ElementType, PropsWithChildren } from 'react'

/**
 * ### Modal Props
 */
export type MainProps<T extends ElementType> = {
    /**
     * **To change modal state**
     */
    visible: boolean
    /**
     * **To change element type**
     */
    as?: T
    /**
     * **To change container style**
     */
    parentStyle?: CSSProperties
    /**
     * **To handle modal outside `click` event**
     */
    onClickOut?: () => void
    /**
     * **To change `aria-label` attr**
     */
    label?: string
}

/**
 * ### Modal Props
 */
export type ModalProps<T extends ElementType> = PropsWithChildren<MainProps<T>> &
    Omit<ComponentPropsWithoutRef<T>, keyof MainProps<T> | 'onClick'>
