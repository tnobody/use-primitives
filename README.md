# usePrimitives

Hooks to handle common primitives with react hooks.

It works very similar to the `useState` hook but as the second return type it returns an object with a predefined set of mutation operators rather than a simple setter function.

## Example

```tsx
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

### Todos

```tsx
export default () => {
  const [todos, { append }] = useArray();
  const [todoText, setTodoText] = useState('');
  return (
    <div>
      <ul>
        {todo.map(r => (
          <li>{t}</li>
        ))}
      </ul>
      <input type="text" onChange={e => setTodoText(e.target.value)} />
      <button onClick={() => append(todoText)}>Add</button>
    </div>
  );
};
```

## Mutation API

All use-primitive utilitiy hooks roughly expose the same api:

```typescript
const [value, mutations] = usePrimitive(optionalInitValue);
```

The following part will describe the methods the mutation objects

### `useBoolean(initValue: boolean = false)`

**`setFalse(): void`**

Sets the boolean state to `false`

**`setTrue(): void`**

Sets the boolean state to `true`

**`toggle(): void`**

Toggles the current boolean state either from `true` to `false` or from `false` to `true`

### `useArray<T>(initValue: T[] = [])`

**`length`**

Memoized size of the array

**`append(...items: T[])`**

Appends `items` to the array state

**`prepend(...items: T[])`**

Prepends `items` to the array state

**`slice(start?:number, end?: number)`**

Sets the array state to the portion of the current state from the `start` index to the `end` index. It calls [`Array.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) on the current state.

**`remove(item: T)`**

Removes items that matches the identity of `item` from the current array state.

**`remove(predicate: (item: T) => boolean))`**

Removes items from the current array state whenever `predicate` returns true
