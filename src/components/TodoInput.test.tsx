import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TodoInput from './TodoInput';

test('отправка новой задачи', () => {
  const addTodo = jest.fn();
  render(<TodoInput addTodo={addTodo} />);

  const input = screen.getByPlaceholderText(/What needs to be done?/i);
  fireEvent.change(input, { target: { value: 'Новая задача' } });
  fireEvent.submit(input);

  expect(addTodo).toHaveBeenCalledWith('Новая задача');
  expect(addTodo).toHaveBeenCalledTimes(1);
});