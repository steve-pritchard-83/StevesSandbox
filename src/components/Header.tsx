// This "interface" is a blueprint for our props.
// It tells other developers (and ourselves) that Header expects one prop: "title", which must be text.
interface HeaderProps {
  title: string;
}

// We've changed the function to accept an argument called "props".
// We use our blueprint "HeaderProps" to describe what "props" will look like.
function Header(props: HeaderProps) {
  return (
    <header>
      {/* Instead of fixed text, we now use the title from our props. */}
      <h1>{props.title}</h1>
    </header>
  );
}

export default Header;