import { renderHook, act } from '@testing-library/react-hooks';
import { useBoolean } from './../../src';

describe('useBoolean', () => {
  describe('setFalse', () => {
    it('should set a boolean to false when init value is true', () => {
      const { result } = renderHook(() => useBoolean(true));
      act(() => result.current[1].setFalse());
      expect(result.current[0]).toBe(false);
    });
    it('should set a boolean to false when init value is false', () => {
      const { result } = renderHook(() => useBoolean(true));
      act(() => result.current[1].setFalse());
      expect(result.current[0]).toBe(false);
    });
  });
  describe('setTrue', () => {
    it('should set a boolean to true when init value is true', () => {
      const { result } = renderHook(() => useBoolean(true));
      act(() => result.current[1].setTrue());
      expect(result.current[0]).toBe(true);
    });
    it('should set a boolean to true when init value is false', () => {
      const { result } = renderHook(() => useBoolean(true));
      act(() => result.current[1].setTrue());
      expect(result.current[0]).toBe(true);
    });
  });

  describe('toggle', () => {
    it('should set a boolean to false when init value is true', () => {
      const { result } = renderHook(() => useBoolean(true));
      act(() => result.current[1].toggle());
      expect(result.current[0]).toBe(false);
    });
    it('should set a boolean to true when init value is false', () => {
      const { result } = renderHook(() => useBoolean(false));
      act(() => result.current[1].toggle());
      expect(result.current[0]).toBe(true);
    });
  });
});
