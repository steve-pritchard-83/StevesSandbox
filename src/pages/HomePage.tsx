import { useState, useEffect } from 'react';
import '../App.css';
// 1. Import our new component and its data type
import TodoItem, { type Todo } from '../components/TodoItem';
import AddTodoForm from '../components/AddTodoForm'; // 1. Import the form

// Let's create some starting data.
// const initialTodos: Todo[] = [
//   { id: 1, text: 'Learn about Components and Props', completed: true },
//   { id: 2, text: 'Learn about State', completed: true },
//   { id: 3, text: 'Build a To-Do List', completed: false },
// ];

function HomePage() {
  // 2. Create the state for our list.
  const [todos, setTodos] = useState<Todo[]>(() => {
    // This function runs only ONCE, on the initial render.
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      // If we found saved todos, parse the string back into an array
      return JSON.parse(savedTodos);
    } else {
      // Otherwise, return a default empty array.
      return [];
    }
  });

  // --- ADD THIS useEffect HOOK ---
  // This effect runs whenever the 'todos' state changes.
  useEffect(() => {
    // localStorage can only store strings, so we convert our
    // array of objects into a JSON string.
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // <-- The "dependency array" now contains 'todos'.
  // -----------------------------

  // --- 1. Create the handler function ---
  const handleToggleTodo = (id: number) => {
    // Find the todo with the matching ID and create a new array
    // with the completed status flipped for that one item.
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  // --- 1. Create the delete handler function ---
  const handleDeleteTodo = (id: number) => {
    // The .filter() method is perfect for this. It creates a new
    // array containing only the items that pass the test.
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // 2. Create the handler function for adding a new todo
  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      // Use the current time to get a simple unique ID.
      // In a real app, a library like `uuid` would be better.
      id: Date.now(),
      text: text,
      completed: false, // New todos are always incomplete
    };
    // Add the new todo to the beginning of the list for a better UX
    setTodos([newTodo, ...todos]);
  };

  return (
    <div>
      <h1>My To-Do List</h1>
      
      {/* 3. Render the form and pass the handler */}
      <AddTodoForm onAdd={handleAddTodo} />

      <div className="todo-list-container">
        {todos.length === 0 ? (
          <p className="empty-state">You're all done! Great work.</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;