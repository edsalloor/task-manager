import { act, renderHook } from '@testing-library/react';
import useForm from 'hooks/useForm';

const initialForm = { name: 'Test User', email: 'test_user@test.com' };

describe('useForm() hook', () => {
  it('should return initial formState', () => {
    const { result } = renderHook(() => useForm(initialForm));

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.email).toBe(initialForm.email);
  });

  it('should update formState', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newEmail = 'tester@test.com';
    const eventMock = { target: { name: 'email', value: newEmail } };

    act(() => {
      result.current.handleInputChange(eventMock);
    });

    expect(result.current.email).toBe(newEmail);
    expect(result.current.name).toBe(initialForm.name);
  });

  it('should reset formState', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const newName = 'Tester User';
    const eventMock = { target: { name: 'name', value: newName } };

    act(() => {
      result.current.handleInputChange(eventMock);
      result.current.resetForm();
    });

    expect(result.current.email).toBe(initialForm.email);
    expect(result.current.name).toBe(initialForm.name);
  });
});
