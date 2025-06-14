import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import AddProfileForm from './components/AddProfileForm'; // <-- Import the new form

// --- You can move the initial data outside the component ---
const initialPeople = [
  { name: 'Steve Pritchard', jobTitle: 'Learning React', avatarUrl: 'https://i.pravatar.cc/150?u=steve' },
  { name: 'Jane Doe', jobTitle: 'Senior Engineer', avatarUrl: 'https://i.pravatar.cc/150?u=jane' },
  { name: 'John Smith', jobTitle: 'Project Manager', avatarUrl: 'https://i.pravatar.cc/150?u=john' },
];

function App() {
  // This creates a state variable named "count".
  // It starts at 0, and we get a function "setCount" to change it.
  const [count, setCount] = useState(0);
  // --- ADD THIS NEW STATE ---
  // We'll use a boolean (true or false) to track visibility.
  // Let's start with it being visible, so we'll set the initial value to true.
  const [showProfiles, setShowProfiles] = useState(true);
  // --------------------------

  // --- 1. Move the people array into state ---
  const [people, setPeople] = useState(initialPeople);

  // --- 2. Create the function to add a person ---
  const handleAddProfile = (name: string) => {
    const newProfile = {
      name: name,
      jobTitle: 'New Team Member',
      avatarUrl: `https://i.pravatar.cc/150?u=${name}`, // Random avatar based on name
    };
    // We use the state updater function, creating a NEW array
    // by spreading the old one and adding the new profile.
    setPeople([...people, newProfile]);
  };

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

      {/* --- Pass the function down as a prop --- */}
      <AddProfileForm onAddProfile={handleAddProfile} />
    </div>
  );
}

export default App;