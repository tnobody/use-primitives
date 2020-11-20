import { useCallback, useMemo, useState } from 'react';

export type Predicate<T> = (v: T) => boolean;
export type PredicateOrStatic<T> = Predicate<T> | T;

const isPredicate = <T>(pred: PredicateOrStatic<T>): pred is Predicate<T> =>
  typeof pred === 'function';

export const useArray = <T>(initValue: T[] = []) => {
  const [value, setValue] = useState(initValue);

  const length = useMemo(() => value.length, [value]);

  const append = useCallback((...item: T[]) => {
    setValue(v => [...v, ...item]);
  }, []);

  const prepend = useCallback((...item: T[]) => {
    setValue(v => [...item, ...v]);
  }, []);

  const slice = useCallback((...args: Parameters<Array<T>['slice']>) => {
    setValue(v => v.slice(...args));
  }, []);

  const remove = useCallback((predicateArg: T | Predicate<T>) => {
    const predicate = isPredicate(predicateArg)
      ? predicateArg
      : (v: T) => v !== predicateArg;
    setValue(v => v.filter(i => predicate(i)));
  }, []);

  return [value, { append, prepend, slice, remove, length }] as const;
};
