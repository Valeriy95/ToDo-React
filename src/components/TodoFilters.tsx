import React from "react";

interface TodoFiltersProps {
    count: number;
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    clearCompleted: () => void;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ count, filter, setFilter, clearCompleted }) => {
    return (
        <div className="todo-filters">
            <span className="todo-filter-count">{count} items left</span>
            <div className="todo-btn-wrapper">
                <button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>
                    All
                </button>
                <button onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>
                    Active
                </button>
                <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>
                    Completed
                </button>
            </div>
            <button onClick={clearCompleted}>Clear completed</button>
        </div>
    );
};

export default TodoFilters;