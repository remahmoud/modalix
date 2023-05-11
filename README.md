# React modal component

simple react modal component without any **style**

## Basic usage

```jsx
import Modal from 'modalix'

const Component = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <button onClick={() => setOpen(true)}>open modal</button>
            <Modal visible={open}>
                <h2>Hello</h2>
                <button onClick={() => setOpen(false)}>close</button>
            </Modal>
        </>
    )
}
```

## Props

### visible: `boolean` `(default: false)`

prop to change modal state

```jsx
<Modal visible={false} />
```

### as: `string` `(default: div)`

prop to change element type

```jsx
<Modal as="form" />
```

### onClickOut: `() => void` `(default: undefined)`

prop to handle outside modal

```jsx
<Modal onClickOut={() => setOpen(false)} />
```

### parentStyle: `CSSProperties`

prop to change wrapper style

```jsx
// default style for wrapper
const style = {
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

// example with overriding parent style
<Modal parentStyle={{ background: 'red' }} />

// output
{
    width: '100%',
    height: '100vh',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 9999,
    display: 'grid',
    placeContent: 'center',
    background: 'red',
}
```

### label: `string` `(default: Modal)`

prop to change aria-label

```jsx
<Modal label="LoginModal" />
```
