import { create } from 'zustand';

export const useTodoStore = create((set) => ({
  todos: [],
  
  // Add a new todo
  addTodo: (text) => {
    set((state) => ({
      todos: [
        ...state.todos,
        {
          id: Date.now(),
          text,
          completed: false,
          createdAt: new Date().toLocaleDateString(),
        },
      ],
    }));
  },

  // Toggle todo completion status
  toggleTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  },

  // Delete a todo
  deleteTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  // Edit a todo
  editTodo: (id, newText) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
    }));
  },

  // Clear all completed todos
  clearCompleted: () => {
    set((state) => ({
      todos: state.todos.filter((todo) => !todo.completed),
    }));
  },

  // Get count of completed todos
  getCompletedCount: () => {
    return (state) => state.todos.filter((todo) => todo.completed).length;
  },

  // Get count of active todos
  getActiveCount: () => {
    return (state) => state.todos.filter((todo) => !todo.completed).length;
  },
}));
