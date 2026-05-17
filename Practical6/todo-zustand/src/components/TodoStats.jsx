import { useTodoStore } from '../store/todoStore';
import './TodoStats.css';

export default function TodoStats() {
  const todos = useTodoStore((state) => state.todos);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const totalCount = todos.length;
  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = totalCount - completedCount;

  return (
    <div className="todo-stats">
      <div className="stats-info">
        <span className="stat">
          <strong>{activeCount}</strong> active
        </span>
        <span className="stat">
          <strong>{completedCount}</strong> completed
        </span>
        <span className="stat">
          <strong>{totalCount}</strong> total
        </span>
      </div>
      {completedCount > 0 && (
        <button onClick={clearCompleted} className="clear-btn">
          Clear Completed
        </button>
      )}
    </div>
  );
}
