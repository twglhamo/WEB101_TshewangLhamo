# Todo List Application with Zustand

A modern, fully-functional Todo List application built with React and Zustand for state management. This project demonstrates how Zustand simplifies state management compared to prop drilling or complex Context setups.

## 🎯 Project Overview

This Todo List application showcases:
- **State Management with Zustand**: Simple, fast, and scalable state management without prop drilling
- **React Components**: Reusable, functional components with hooks
- **Modern UI**: Beautiful gradient design with responsive layout
- **Full CRUD Operations**: Create, Read, Update, and Delete todos

## 📁 Project Structure

```
todo-zustand/
├── src/
│   ├── components/
│   │   ├── TodoInput.jsx       # Component for adding new todos
│   │   ├── TodoInput.css       # Styling for input component
│   │   ├── TodoItem.jsx        # Individual todo item component
│   │   ├── TodoItem.css        # Styling for todo items
│   │   ├── TodoList.jsx        # Container for all todos
│   │   ├── TodoList.css        # Styling for todo list
│   │   ├── TodoStats.jsx       # Statistics component
│   │   └── TodoStats.css       # Styling for statistics
│   ├── store/
│   │   └── todoStore.js        # Zustand store (state management)
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styling
│   ├── index.css               # Global styles
│   └── main.jsx                # React entry point
├── package.json                # Project dependencies
├── vite.config.js              # Vite configuration
└── index.html                  # HTML entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd todo-zustand
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

## 📦 Dependencies

- **React**: UI library for building components
- **Zustand**: Lightweight state management library
- **Vite**: Modern build tool for fast development

## 🎨 Features

### 1. **Add Todo**
- Click the input field and type your todo
- Click "Add Todo" button or press Enter
- New todos appear in the list below

### 2. **Mark as Complete**
- Click the checkbox next to a todo to mark it as complete
- Completed todos appear with a strikethrough effect
- Edit button is disabled for completed todos

### 3. **Edit Todo**
- Click the "Edit" button on any incomplete todo
- Modify the text in the input field
- Click "Save" to save changes or "Cancel" to discard
- The todo's date remains unchanged

### 4. **Delete Todo**
- Click the "Delete" button to remove a todo permanently
- Works for both completed and incomplete todos

### 5. **View Statistics**
- Active count: Number of incomplete todos
- Completed count: Number of finished todos
- Total count: Total number of todos

### 6. **Clear Completed**
- When you have completed todos, a "Clear Completed" button appears
- Click it to remove all completed todos at once

## 🏗️ Zustand Store (`src/store/todoStore.js`)

The Zustand store manages all application state and provides actions:

```javascript
export const useTodoStore = create((set) => ({
  // State
  todos: [],
  
  // Actions
  addTodo: (text) => { /* ... */ },
  toggleTodo: (id) => { /* ... */ },
  deleteTodo: (id) => { /* ... */ },
  editTodo: (id, newText) => { /* ... */ },
  clearCompleted: () => { /* ... */ },
  getCompletedCount: () => { /* ... */ },
  getActiveCount: () => { /* ... */ },
}));
```

### Why Zustand?

**Advantages over Context API or Redux:**
- ✅ No provider wrapper needed
- ✅ Minimal boilerplate code
- ✅ Simple API - just `create()` and `setState()`
- ✅ Smaller bundle size
- ✅ Automatic re-render optimization
- ✅ Doesn't cause unnecessary re-renders

## 💡 Component Architecture

### TodoInput Component
- Handles user input for new todos
- Subscribes to `addTodo` action from Zustand
- Auto-focuses and clears after submission

### TodoItem Component
- Displays individual todo with metadata
- Supports inline editing with save/cancel
- Provides delete and toggle functionality
- Shows creation date

### TodoList Component
- Renders all todos using `TodoItem`
- Shows empty state when no todos exist
- Subscribes to todos array from store

### TodoStats Component
- Displays todo statistics
- Shows "Clear Completed" button when applicable
- Calculates counts from todos array

## 🎨 Design Highlights

- **Gradient Background**: Purple to pink gradient (CSS)
- **Card-based Layout**: Clean, centered white card design
- **Smooth Animations**: Hover effects and transitions
- **Responsive Design**: Mobile-friendly layout
- **Color Scheme**:
  - Primary: Purple (#667eea) to Pink (#764ba2)
  - Danger: Red (#ff6b6b)
  - Success: Green (#4caf50)
  - Neutral: Gray shades

## 🔄 Data Flow

```
User Input
    ↓
TodoInput Component
    ↓
addTodo(text) action
    ↓
Zustand Store (todoStore.js)
    ↓
todos array updated
    ↓
TodoList & TodoStats Components (re-render automatically)
    ↓
Updated UI displayed
```

## 📝 Todo Object Structure

Each todo has the following properties:

```javascript
{
  id: 1234567890,              // Timestamp-based unique ID
  text: "Learn Zustand",       // Todo description
  completed: false,             // Completion status
  createdAt: "5/17/2026"       // Creation date (localized)
}
```

## 🧪 Testing the Application

Try these user actions:

1. **Add Multiple Todos**
   - Add several todos with different descriptions
   - Notice stats update automatically

2. **Toggle Completion**
   - Click checkboxes to mark todos complete/incomplete
   - Observe visual changes and stat updates

3. **Edit Functionality**
   - Click Edit, modify text, and save
   - Verify the todo text changes without losing date

4. **Delete Operations**
   - Delete a todo from the list
   - Verify it's removed instantly

5. **Clear Completed**
   - Mark multiple todos as complete
   - Click "Clear Completed" to remove them all

6. **Empty State**
   - Delete all todos
   - Verify the empty state message appears

## 🚀 Build for Production

To create an optimized production build:

```bash
npm run build
```

The build files will be in the `dist/` directory.

To preview the production build:

```bash
npm run preview
```

## 📚 Learning Outcomes

By completing this project, you'll understand:

✅ How to use Zustand for state management
✅ Creating custom hooks with `useTodoStore()`
✅ Selective state subscription (only re-render when needed)
✅ Component composition and reusability
✅ React hooks (useState, useCallback)
✅ CSS styling and responsive design
✅ Building a complete CRUD application

## 🔑 Key Zustand Concepts Used

1. **Store Creation**: `create()` function
2. **State Subscription**: Component-level subscriptions with selector functions
3. **Immutable Updates**: Using spread operators
4. **Performance**: Automatic optimization of re-renders
5. **Simple API**: Actions are just functions that call `set()`

## 🎓 Further Enhancements

Consider adding these features:

- 📅 Due dates for todos
- 🏷️ Categories/tags
- 🔍 Search and filter
- 💾 Local storage persistence
- 🎨 Theme switcher (dark/light mode)
- 📱 Drag and drop to reorder
- 🌐 API integration

## 📝 Notes

- Todo IDs are generated using `Date.now()` for simplicity
- Dates are formatted using `toLocaleDateString()`
- The app works entirely offline with no backend required
- All state is stored in memory (data is lost on page refresh)

## 🤝 Contributing

Feel free to fork, modify, and enhance this project for learning purposes!

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ using React + Zustand**
