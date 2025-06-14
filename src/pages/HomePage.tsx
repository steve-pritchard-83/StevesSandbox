import { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import ProfileCard, { type ProfileCardProps } from '../components/ProfileCard';
import AddProfileForm from '../components/AddProfileForm';
import ProfileList from '../components/ProfileList';

function App() {
  const [count, setCount] = useState(0);
  const [showProfiles, setShowProfiles] = useState(true);

  const [people, setPeople] = useState<ProfileCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      // Tell TypeScript that "data" is an array of objects of "any" type for now.
      // This is a quick way to solve this specific error.
      .then((data: any[]) => {
        const formattedData = data.map(user => ({
          name: user.name,
          jobTitle: user.email,
          avatarUrl: `https://i.pravatar.cc/150?u=${user.id}`
        }));
        setPeople(formattedData);
        setIsLoading(false);
      });
  }, []);

  const handleAddProfile = (name: string) => {
    const newProfile = {
      name: name,
      jobTitle: 'New Team Member',
      avatarUrl: `https://i.pravatar.cc/150?u=${name}`,
    };
    setPeople([...people, newProfile]);
  };

  return (
    <div>
      <Header title="Fetching Data!" />

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
      

      <div className="card">
        <p>You have clicked the button {count} times.</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>

      <h2>Welcome to Your React Sandbox!</h2>
      <p>This is your starting point. Let's build something great.</p>

      <div className="card">
        <button onClick={() => setShowProfiles(!showProfiles)}>
          {showProfiles ? 'Hide Profiles' : 'Show Profiles'}
        </button>
      </div>

      {showProfiles && (
        <ProfileList isLoading={isLoading} people={people} />
      )}

      <AddProfileForm onAddProfile={handleAddProfile} />
    </div>
  );
}

export default App;