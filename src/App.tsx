import React, { useState } from 'react';
import './app.style.css';
import TodoFilters from './components/TodoFilters';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (text: string) => {
    const newTodo = { id: Date.now(), text, completed: false};
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? {...todo, completed: !todo.completed } : todo)));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className='todo-app'>
      <h1 className='todo-title'>todos</h1>
      <div className='todo-container'>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo}/>
      <TodoFilters
        count={todos.filter(todo => !todo.completed).length}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
      </div>
      <div className='todo-container-line'></div>
      <div className='todo-container-line-bottom'></div>
    </div>
  )
}

export default App
