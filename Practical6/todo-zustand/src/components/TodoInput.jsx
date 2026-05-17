import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import './TodoInput.css';

export default function TodoInput() {
  const [input, setInput] = useState('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
        autoFocus
      />
      <button type="submit" className="add-btn">
        Add Todo
      </button>
    </form>
  );
}
