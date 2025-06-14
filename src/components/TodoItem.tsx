import './TodoItem.css';

// Define and Export the "Todo" blueprint in one step.
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Now, the props interface can use the "Todo" type defined just above.
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

function TodoItem(props: TodoItemProps) {
  const { todo, onToggle, onDelete } = props;

  return (
    // 3. Add the 'completed' class dynamically
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* 2. Add the onChange handler */}
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onDelete(todo.id)}>&times;</button>
    </div>
  );
}

export default TodoItem;
