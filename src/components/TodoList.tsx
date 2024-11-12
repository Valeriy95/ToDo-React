import React from "react";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoListProps {
    todos: Todo[];
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                    <input className="custom-checkbox"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                    />
                    <span className="todo-list-text">{todo.text}</span>
                </li>
            ))}
        </ul>
    );
};

export default TodoList