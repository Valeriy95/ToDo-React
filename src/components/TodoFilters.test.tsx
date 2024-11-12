import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import TodoFilters from './TodoFilters';

test('отображение количества активных задач', () => {
  render(<TodoFilters count={2} filter="all" setFilter={() => {}} clearCompleted={() => {}} />);
  
  expect(screen.getByText(/2 items left/i)).toBeInTheDocument();
});

test('переключение фильтров', () => {
  const setFilter = jest.fn();
  render(<TodoFilters count={0} filter="all" setFilter={setFilter} clearCompleted={() => {}} />);
  
  fireEvent.click(screen.getByText(/Active/i));
  expect(setFilter).toHaveBeenCalledWith('active');
  
  fireEvent.click(screen.getAllByText(/Completed/i)[0]);
  expect(setFilter).toHaveBeenCalledWith('completed');
});

test('удаление выполненных задач', () => {
  const clearCompleted = jest.fn();
  render(<TodoFilters count={0} filter="all" setFilter={() => {}} clearCompleted={clearCompleted} />);

  fireEvent.click(screen.getByText(/Clear completed/i));
  expect(clearCompleted).toHaveBeenCalled();
});