import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';

function App() {
  // This creates a state variable named "count".
  // It starts at 0, and we get a function "setCount" to change it.
  const [count, setCount] = useState(0);
  // --- ADD THIS NEW STATE ---
  // We'll use a boolean (true or false) to track visibility.
  // Let's start with it being visible, so we'll set the initial value to true.
  const [showProfiles, setShowProfiles] = useState(true);
  // --------------------------

  // --- ADD THIS ARRAY OF DATA ---
  const people = [
    {
      name: 'Steve Pritchard',
      jobTitle: 'Learning React',
      avatarUrl: 'https://i.pravatar.cc/150?u=steve',
    },
    {
      name: 'Jane Doe',
      jobTitle: 'Senior Engineer',
      avatarUrl: 'https://i.pravatar.cc/150?u=jane',
    },
    {
      name: 'John Smith',
      jobTitle: 'Project Manager',
      avatarUrl: 'https://i.pravatar.cc/150?u=john',
    },
  ];
  // ---------------------------------

  return (
    <div>
      <Header title="Learning About State!" />

      {/* Use our new component! */}
      <div>
        {people.map(person => (
          <ProfileCard
            key={person.name}
            name={person.name}
            jobTitle={person.jobTitle}
            avatarUrl={person.avatarUrl}
          />
        ))}
      </div>
      

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

      {/* --- ADD THIS BUTTON --- */}
      <div className="card">
        <button onClick={() => setShowProfiles(!showProfiles)}>
          {showProfiles ? 'Hide Profiles' : 'Show Profiles'}
        </button>
      </div>
      {/* ----------------------- */}

      {/* --- ADD THE CONDITIONAL WRAPPER --- */}
      {showProfiles && (
        <div>
          {people.map(person => (
            <ProfileCard
              key={person.name}
              name={person.name}
              jobTitle={person.jobTitle}
              avatarUrl={person.avatarUrl}
            />
          ))}
        </div>
      )}
      {/* ------------------------------------- */}
    </div>
  );
}

export default App;