import * as React from 'react';

import { renderHook } from 'utils';
import { useComposeRefs, setRef } from './useComposeRefs.hook';

describe('useComposeRefs', () => {
  it('should set value to all refs', () => {
    const ref1 = React.createRef<HTMLDivElement>();
    const ref2 = React.createRef<HTMLDivElement>();
    const callbackRef = jest.fn();

    const { result } = renderHook(() => useComposeRefs(ref1, ref2, callbackRef));

    const composedRef = result.current;
    const div = document.createElement('div');
    composedRef(div);

    expect(ref1.current).toBe(div);
    expect(ref2.current).toBe(div);
    expect(callbackRef).toHaveBeenCalledWith(div);
  });

  it('should handle null and undefined refs', () => {
    const ref1 = React.createRef<HTMLDivElement>();
    const { result } = renderHook(() => useComposeRefs(ref1, null, undefined!));

    const composedRef = result.current;
    const div = document.createElement('div');
    composedRef(div);

    expect(ref1.current).toBe(div);
  });
});

describe('setRef', () => {
  it('should call function ref with value', () => {
    const callbackRef = jest.fn();
    const div = document.createElement('div');

    setRef(callbackRef, div);

    expect(callbackRef).toHaveBeenCalledWith(div);
  });

  it('should set value to mutable ref object', () => {
    const ref = React.createRef<HTMLDivElement>();
    const div = document.createElement('div');

    setRef(ref, div);

    expect(ref.current).toBe(div);
  });

  it('should do nothing for null or undefined ref', () => {
    const div = document.createElement('div');

    expect(() => setRef(null, div)).not.toThrow();
    expect(() => setRef(undefined!, div)).not.toThrow();
  });
});
