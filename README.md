# usePrimitives

Hooks to handle common primitives with react hooks.

It works very similar to the `useState` hook but as the second return type it returns an object with a predefined set of mutation operators rather than a simple setter function.

## Example

```typescript
export default () => {
  const [isModalOpen, { setTrue: setOpen, setFalse: setClosed }] = useBoolean(
    false
  );

  return (
    <div>
      <ACoolModalComponent open={isModalOpen} onDismiss={setClosed} />
      <button onClick={setOpen}>Open Modal</button>
    </div>
  );
};
```
