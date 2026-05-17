import { useState } from 'react';
import { useTodoStore } from '../store/todoStore';
import './TodoItem.css';

export default function TodoItem({ todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const editTodo = useTodoStore((state) => state.editTodo);

  const handleSaveEdit = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="todo-checkbox"
        />
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="todo-edit-input"
            autoFocus
          />
        ) : (
          <span className="todo-text">{todo.text}</span>
        )}
        <span className="todo-date">{todo.createdAt}</span>
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <>
            <button onClick={handleSaveEdit} className="save-btn">
              Save
            </button>
            <button onClick={handleCancel} className="cancel-btn">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="edit-btn"
              disabled={todo.completed}
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}
