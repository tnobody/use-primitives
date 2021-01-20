import { act, renderHook } from '@testing-library/react-hooks';
import { useNumber } from '../../src/use-number/use-number';

describe('useNumber', () => {
  describe('add', () => {
    it('21 + 21 === 42', () => {
      const { result } = renderHook(() => useNumber(21));
      act(() => result.current[1].add(21));
      expect(result.current[0]).toEqual(42);
    });
  });

  describe('subtract', () => {
    it('84 - 42 === 42', () => {
      const { result } = renderHook(() => useNumber(84));
      act(() => result.current[1].subtract(42));
      expect(result.current[0]).toEqual(42);
    });
  });

  describe('divide', () => {
    it('126 / 3 === 42', () => {
      const { result } = renderHook(() => useNumber(126));
      act(() => result.current[1].divide(3));
      expect(result.current[0]).toEqual(42);
    });
  });

  describe('multiply', () => {
    it('14 * 3 === 42', () => {
      const { result } = renderHook(() => useNumber(14));
      act(() => result.current[1].multiply(3));
      expect(result.current[0]).toEqual(42);
    });
  });

  describe('pow', () => {
    it('2 ** 4 === 16', () => {
      const { result } = renderHook(() => useNumber(2));
      act(() => result.current[1].pow(4));
      expect(result.current[0]).toEqual(16);
    });
  });

  describe('negate', () => {
    it('-42 * -1 === 42', () => {
      const { result } = renderHook(() => useNumber(-42));
      act(() => result.current[1].negate());
      expect(result.current[0]).toEqual(42);
    });
  });

  describe('increment', () => {
    it('41++ === 42', () => {
      const { result } = renderHook(() => useNumber(41));
      act(() => result.current[1].increment());
      expect(result.current[0]).toEqual(42);
    });
  });

  describe('decrement', () => {
    it('43-- === 42', () => {
      const { result } = renderHook(() => useNumber(43));
      act(() => result.current[1].decrement());
      expect(result.current[0]).toEqual(42);
    });
  });
});
