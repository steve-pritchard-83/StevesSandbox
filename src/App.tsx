import { useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  // This creates a state variable named "count".
  // It starts at 0, and we get a function "setCount" to change it.
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header title="Learning About State!" />

      {/* START of new section */}
      <div className="card">
        <p>You have clicked the button {count} times.</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
      {/* END of new section */}

      <h2>Welcome to Your React Sandbox!</h2>
      <p>This is your starting point. Let's build something great.</p>
    </div>
  );
}

export default App;