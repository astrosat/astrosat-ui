import { renderHook, cleanup, act } from '@testing-library/react-hooks';

import useModal from './use-modal.hook';

describe('Use Modal', () => {
  afterEach(cleanup);

  it('should toggle modal visibility', () => {
    const { result } = renderHook(() => useModal(true));
    expect(result.current[0]).toBe(true);

    act(() => result.current[1]());
    expect(result.current[0]).toBe(false);
  });
});
