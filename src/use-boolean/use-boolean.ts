import { useCallback, useState } from 'react';

export const useBoolean = (defaultValue = false) => {
  const [value, setValue] = useState(defaultValue);

  const setFalse = useCallback(() => {
    setValue(false);
  }, []);

  const setTrue = useCallback(() => {
    setValue(true);
  }, []);

  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);

  return [
    value,
    {
      setFalse,
      setTrue,
      toggle,
    },
  ] as const;
};
