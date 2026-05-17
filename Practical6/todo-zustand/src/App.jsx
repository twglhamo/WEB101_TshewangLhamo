import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoStats from './components/TodoStats';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <h1 className="app-title">My Todo List</h1>
        <p className="app-subtitle">
          State management with Zustand - Simple, fast, and scalable
        </p>

        <div className="app-content">
          <TodoInput />
          <TodoList />
          <TodoStats />
        </div>
      </div>
    </div>
  );
}

export default App;
