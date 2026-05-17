import { useTodoStore } from '../store/todoStore';
import TodoItem from './TodoItem';
import './TodoList.css';

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  if (todos.length === 0) {
    return (
      <div className="empty-state">
        <p>No todos yet! Add one to get started.</p>
      </div>
    );
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
