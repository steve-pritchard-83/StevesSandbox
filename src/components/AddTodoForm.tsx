import { useState, useRef, useEffect } from 'react';
import './AddTodoForm.css';

// 1. Define the props. It needs one function.
interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

function AddTodoForm(props: AddTodoFormProps) {
  // 2. State to manage the input field's text.
  const [text, setText] = useState('');

  // 2. Create the ref. We tell TypeScript it will point to an HTML input element.
  const inputRef = useRef<HTMLInputElement>(null);

  // 3. Add the effect to run on mount.
  useEffect(() => {
    // When the component first loads, focus the input.
    // The '?' is a "safe navigation" operator, it won't crash if inputRef.current is null.
    inputRef.current?.focus();
  }, []); // Empty dependency array means this runs only ONCE.

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Stop the page from reloading
    if (!text.trim()) return; // Don't add empty todos

    props.onAdd(text); // Call the parent's function with the new text
    setText(''); // Clear the input field
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        // 4. Attach the ref to the DOM element.
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
