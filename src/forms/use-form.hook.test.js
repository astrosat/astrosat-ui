import { renderHook, cleanup, act } from '@testing-library/react-hooks';

import useForm from './use-form.hook';

describe('Use Form', () => {
  afterEach(cleanup);

  it('should initialize form objects', () => {
    const onSubmit = jest.fn();
    const validate = jest.fn(() => ({}));

    const { result } = renderHook(() => useForm(onSubmit, validate));

    expect(Object.keys(result.current.errors).length).toBe(0);
    expect(Object.keys(result.current.values).length).toBe(0);
  });

  it('should submit values', () => {
    const onSubmit = jest.fn();
    const validate = jest.fn(() => ({}));

    const { result } = renderHook(() => useForm(onSubmit, validate));

    const mockSubmitEvent = {
      preventDefault: jest.fn()
    };
    act(() => result.current.handleSubmit(mockSubmitEvent));
    expect(onSubmit).toHaveBeenCalled();
  });

  it('should successfully validate form on changes', () => {
    const onSubmit = jest.fn();
    const validate = jest.fn(() => ({}));

    const { result } = renderHook(() => useForm(onSubmit, validate));

    const mockChangeEvent = {
      persist: jest.fn(),
      target: {
        name: 'email',
        value: 'Mock Value'
      }
    };
    act(() => result.current.handleChange(mockChangeEvent));
    expect(validate).toHaveBeenCalled();
    expect(result.current.values.email).toBe(mockChangeEvent.target.value);
  });

  it('should NOT successfully validate form on changes', () => {
    const message = 'Not Correctly Formatted';
    const onSubmit = jest.fn();
    const validate = jest.fn(() => ({ email: message }));

    const { result } = renderHook(() => useForm(onSubmit, validate));

    const mockChangeEvent = {
      persist: jest.fn(),
      target: {
        name: 'email',
        value: 'Mock Value'
      }
    };
    act(() => result.current.handleChange(mockChangeEvent));
    expect(validate).toHaveBeenCalled();
    expect(result.current.errors.email).toBe(message);
  });
});
