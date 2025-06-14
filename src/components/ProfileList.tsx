import ProfileCard, { type ProfileCardProps } from './ProfileCard';

// 1. Define the props this component needs.
interface ProfileListProps {
  isLoading: boolean;
  people: ProfileCardProps[];
}

// 2. The component receives the props.
function ProfileList(props: ProfileListProps) {
  // 3. The conditional rendering logic now lives here.
  if (props.isLoading) {
    return <p>Loading profiles...</p>;
  }

  return (
    <div>
      {props.people.map(person => (
        <ProfileCard
          key={person.name}
          name={person.name}
          jobTitle={person.jobTitle}
          avatarUrl={person.avatarUrl}
        />
      ))}
    </div>
  );
}

export default ProfileList;
