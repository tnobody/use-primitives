import { act, renderHook } from '@testing-library/react-hooks';
import { useArray } from '../../../src';

describe('useArray', () => {
  it('should initialize with empty array', () => {
    const {result} = renderHook(() => useArray())
    expect(result.current[0]).toEqual([])
  })
  it('should initialize with initial value array', () => {
    const {result} = renderHook(() => useArray([1,2,3]))
    expect(result.current[0]).toEqual([1,2,3])
  })
  describe('append', () => {
    it('should append a single item at the end of an array', () => {
      const { result } = renderHook(() => useArray([1]));
      act(() => result.current[1].append(2));
      expect(result.current[0]).toEqual([1, 2]);
    });
    it('should append many items at the end of an array', () => {
      const { result } = renderHook(() => useArray([1]));
      act(() => result.current[1].append(2, 3, 4));
      expect(result.current[0]).toEqual([1, 2, 3, 4]);
    });
  });
  describe('prepend', () => {
    it('should prepend a single item at the beginning of an array', () => {
      const { result } = renderHook(() => useArray([1]));
      act(() => result.current[1].prepend(2));
      expect(result.current[0]).toEqual([2, 1]);
    });
    it('should prepend many items at the beginning of an array', () => {
      const { result } = renderHook(() => useArray([1]));
      act(() => result.current[1].prepend(2, 3, 4));
      expect(result.current[0]).toEqual([2, 3, 4, 1]);
    });
  });
  describe('length', () => {
    it('should increase length when array grows', () => {
      const { result } = renderHook(() => useArray([1]));
      expect(result.current[1].length).toEqual(1);
      act(() => result.current[1].append(2, 3, 4));
      expect(result.current[1].length).toEqual(4);
    })
  })

  describe('slice', () => {
    it('should behave like the array.prototype method', () => {
      const { result } = renderHook(() => useArray([1,2,3,4,5]));
      act(() => result.current[1].slice(2,3));
      expect(result.current[0]).toEqual([1,2,3,4,5].slice(2,3));
    })
  })

  describe('remove', () => {
    it('should remove by a static value (strict equal)', () => {
      const { result } = renderHook(() => useArray([1,2,3,4,5]));
      act(() => result.current[1].remove(2));
      expect(result.current[0]).toEqual([1,3,4,5]);
    })
    it('should remove by a predicate thats called for each item', () => {
      const { result } = renderHook(() => useArray([1,2,3]));
      const predicate = jest.fn().mockReturnValue(false)
      act(() => result.current[1].remove(predicate));
      expect(result.current[0]).toEqual([]);
      expect(predicate).toHaveBeenCalledTimes(3);
    })
  });
});
