import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TodoList from './TodoList';

const todos = [
  { id: 1, text: 'Первая задача', completed: false },
  { id: 2, text: 'Вторая задача', completed: true }
];

test('отображение списка задач', () => {
  render(<TodoList todos={todos} toggleTodo={() => {}} />);
  
  expect(screen.getByText(/Первая задача/i)).toBeInTheDocument();
  expect(screen.getByText(/Вторая задача/i)).toBeInTheDocument();
});

test('переключение состояния выполнения задачи', () => {
  const toggleTodo = jest.fn();
  render(<TodoList todos={todos} toggleTodo={toggleTodo} />);

  const checkbox = screen.getAllByRole('checkbox')[0];
  fireEvent.click(checkbox);
  expect(toggleTodo).toHaveBeenCalledWith(1);
});