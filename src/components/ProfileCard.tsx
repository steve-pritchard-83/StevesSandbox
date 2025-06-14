import './ProfileCard.css';

// Define the blueprint for the data this component needs.
interface ProfileCardProps {
  name: string;
  jobTitle: string;
  avatarUrl: string; // The URL for the person's picture
}

// The component function accepts the props object.
function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profile-card">
      <img src={props.avatarUrl} alt={`A profile picture of ${props.name}`} className="profile-avatar" />
      <div className="profile-info">
        <h2 className="profile-name">{props.name}</h2>
        <p className="profile-title">{props.jobTitle}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
