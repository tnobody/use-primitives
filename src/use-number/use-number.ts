import { useCallback, useState } from 'react';

export const useNumber = (initValue: number = 0) => {
  const [value, setValue] = useState(initValue);

  const add = useCallback((a: number) => setValue(v => v + a), []);
  const subtract = useCallback((s: number) => setValue(v => v - s), []);
  const divide = useCallback((d: number) => setValue(v => v / d), []);
  const multiply = useCallback((m: number) => setValue(v => v * m), []);
  const pow = useCallback((e: number) => setValue(v => v ** e), []);
  const negate = useCallback(() => setValue(v => v * -1), []);
  const increment = useCallback(() => setValue(v => v + 1), []);
  const decrement = useCallback(() => setValue(v => v - 1), []);

  return [
    value,
    { add, subtract, divide, multiply, pow, negate, increment, decrement },
  ] as const;
};
