import { useState } from 'react';
import './AddProfileForm.css';

// 1. Define the props interface: This component expects to receive a function.
interface AddProfileFormProps {
  onAddProfile: (name: string) => void;
}

// 2. Update the function signature to accept the props.
function AddProfileForm(props: AddProfileFormProps) {
  const [name, setName] = useState('');

  // 3. Create a function to handle the form submission.
  const handleSubmit = (event: React.FormEvent) => {
    // a. Stop the browser from refreshing the page.
    event.preventDefault(); 
    
    // b. Optional: Don't do anything if the name is empty.
    if (!name.trim()) return; 

    // c. Call the function passed down from the App component.
    props.onAddProfile(name); 
    
    // d. Clear the input field for the next entry.
    setName(''); 
  };

  return (
    // 4. Tell the <form> element to use our handleSubmit function.
    <form className="add-profile-form" onSubmit={handleSubmit}>
      <h3>Add a New Profile</h3>
      <div className="form-control">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <button type="submit">Add Profile</button>
    </form>
  );
}

export default AddProfileForm;